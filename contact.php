<?php
/* FPT - Formation Pour Tous : reception des demandes du formulaire par e-mail */
const DESTINATAIRE = 'ifpfpt53@gmail.com';

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

function reponse($ok, $msg, $code = 200) { http_response_code($code); echo json_encode(['ok' => $ok, 'message' => $msg]); exit; }

if ($_SERVER['REQUEST_METHOD'] !== 'POST') reponse(false, 'Methode non autorisee.', 405);

$data = json_decode(file_get_contents('php://input'), true);
if (!is_array($data)) $data = $_POST;

// Anti-spam : champ cache rempli = robot
if (!empty($data['website'])) reponse(true, 'OK');

// Limite simple : 1 demande toutes les 30 secondes par visiteur
session_start();
if (!empty($_SESSION['last']) && time() - $_SESSION['last'] < 30) reponse(false, 'Merci de patienter quelques secondes.', 429);

$nettoie = fn($v, $max) => mb_substr(trim(strip_tags((string)($v ?? ''))), 0, $max);
$nom = $nettoie($data['nom'] ?? '', 120);
$email = trim((string)($data['email'] ?? ''));
$tel = $nettoie($data['tel'] ?? '', 40);
$formation = $nettoie($data['formation'] ?? '', 160);
$message = $nettoie($data['message'] ?? '', 4000);

if ($nom === '' || $message === '' || $formation === '') reponse(false, 'Champs obligatoires manquants.', 422);
if (!filter_var($email, FILTER_VALIDATE_EMAIL) || preg_match('/[\r\n]/', $email)) reponse(false, 'Adresse e-mail invalide.', 422);

$hote = preg_replace('/^www\./', '', preg_replace('/[^a-z0-9.\-]/i', '', $_SERVER['HTTP_HOST'] ?? 'localhost'));
$expediteur = 'no-reply@' . $hote;   // adresse du domaine (meilleure delivrabilite)

$sujet = '=?UTF-8?B?' . base64_encode('Nouvelle demande FPT : ' . $formation) . '?=';
$corps = "Nouvelle demande recue depuis le site FPT\n\n"
       . "Nom : $nom\nE-mail : $email\nTelephone : " . ($tel ?: '-') . "\nFormation : $formation\n\nMessage :\n$message\n";
$entetes = "From: FPT Site web <$expediteur>\r\nReply-To: $nom <$email>\r\nContent-Type: text/plain; charset=UTF-8\r\nX-Mailer: PHP/" . phpversion();

if (!mail(DESTINATAIRE, $sujet, $corps, $entetes)) reponse(false, "L'envoi a echoue.", 500);

$_SESSION['last'] = time();
reponse(true, 'Demande envoyee.');
