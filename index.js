document.getElementById('send-btn').addEventListener('click', sendMessage);
console.log("js")
// Fonction pour envoyer un message utilisateur
function sendMessage(messageContent) {
    const input = document.getElementById('message-input');
    const messageText = messageContent;
    
    if (messageText === '') return;

    const chatBody = document.getElementById('chat-body');

    // Créer une bulle pour le message envoyé
    const sentMessage = document.createElement('div');
    sentMessage.classList.add('message', 'sent');
    sentMessage.textContent = messageText;
    chatBody.appendChild(sentMessage);

    // Effacer le champ de saisie
    input.value = '';

    // Défilement automatique vers le bas du chat
    chatBody.scrollTop = chatBody.scrollHeight;
}

// Fonction pour recevoir un message (avec un contenu passé en argument)
function receiveMessage(messageContent) {
    console.log("recieveMessage" + messageContent)
    const chatBody = document.getElementById('chat-body');
    
    // Créer une bulle pour le message reçu
    const receivedMessage = document.createElement('div');
    receivedMessage.classList.add('message', 'received');
    receivedMessage.textContent = messageContent; // Utiliser le message passé en paramètre
    
    chatBody.appendChild(receivedMessage);

    // Défilement automatique vers le bas du chat
    chatBody.scrollTop = chatBody.scrollHeight;
}

// Simuler un message entrant sans interaction utilisateur
receiveMessage("Salut! Je m'appelle Denis");
setTimeout(receiveMessage("Et toi, c'est quoi ton petit nom? ;)"), 100);
setTimeout(receiveMessage("Je te trouve très charmante"), 100);
setTimeout(receiveMessage("Je travaille dans une entreprise pharmaceutique, un boulot très chiant, tu t'en doutes.:) Mais c'est très bien payé donc je reste MDR."), 100);
setTimeout(receiveMessage("J'ai  une page Facebook: Denis la Menace. Je t'envoie le lien si tu veux ;)"), 100);
setTimeout(receiveMessage("C'est là que je suis vraiment moi 💪"), 100);
setTimeout(receiveMessage("La balle est dans ton camp, j'attend ta réponse avec impatience, bisous 😊"), 100);
setTimeout(sendMessage("Bonjour, nous nous connaissons?"), 200);
setTimeout(receiveMessage("C'est super gentil de m'avoir répondu. T'as mis beaucoup de temps mais vieux motard que jamais 🤣. Je me sent privilégié haha c'est pas tous les jours qu'on peut papoter avec une star! Qu'est-ce que je pourrais bien t'écrire maintentant? Des blagues? Je n'en connais qu'une, celle du zoophile qui rentre dans un bar LOL!"), 100);
setTimeout(receiveMessage("Que veux-tu savoir de moi? Moi je suis curieux. De tout. De toi. De tout sur toi ;)."), 100);
setTimeout(receiveMessage("Je m'emmerde comme un rat au taf. Jusqu'à aujourd'hui où je t'ai trouvée. Je ne veux pas t'effrayer mais j'ai misé tous mes jettons sur ton numéro. J'ai besoin qu'on se parle pour faire passer le temps. Défi accepté? Top-là 👊!"), 100);
setTimeout(sendMessage("Euh... Pourquoi ne pas plutôt me raconter ta vie?"), 200);
setTimeout(receiveMessage("Peut-être, au fond. Elle n'est pas plus nulle que celle des autres [...] Fiouu! Eh bien je pense que j'en ai déjà pas mal dit sur moi! Je trouve que tu as un sens de l'écoute (enfin, de la lecture LOL) exeptionnel. Je te laisse je vais sortir madame, ce soir. Un cinéma et un resto, ça faisait longtemps 😽"), 100);
setTimeout(receiveMessage("Je te trouve vraiment magnifique sur tes photos 🥰"), 100);
setTimeout(receiveMessage("Coucou beauté! (je prie pour que monsieur ton mari ne filtre pas tes messages) Comment vas-tu? Ça faisait longtemps. Nos petits échanges me manques, enfin \"échanges\" parce que j'échange pas grand chose d'autre que des vents LOL!"), 100);
setTimeout(receiveMessage("Tu sais quoi, je me suis rendu compte que tu me manquais! Je pense beaucoup à toi. Beaucoup beaucoup! Pas d'inquiétude, je ne suis pas psycho, juste un petit peu obsessionnel😳. Tu penses à moi aussi? Un tout petit peu? Je vais me dire que oui. Je t'embrasse😘!"), 100);
setTimeout(receiveMessage("C'est vrai que tu dis du mal de moi en public? Si c'est le cas j'en suis très déçu. Le lien que j'ai créé avec toi est très précieux, tu sais."), 100);
setTimeout(sendMessage("Je pense qu'il a dû y avoir erreur. Qui t'as dit ça?"), 200);
setTimeout(receiveMessage("Je te crois sur parole. Pas besoin de révéler l'identité du gars. Je ferai juste gaffe la prochaine fois qu'il me parlera ;). "), 100);
setTimeout(receiveMessage("T'es vraiment super bonne sur ta nouvelle photo de profil."), 100);
setTimeout(receiveMessage("Ça commence vraiment à me faire chier que tu ne me répondes qu'une fois sur mille!"), 100);
setTimeout(receiveMessage("Y a-t-il un problème? J'ai vu que tu m'as retiré de ma liste d'amis. J'ai dis quelque chose qui t'a déplu?"), 100);
setTimeout(receiveMessage("Je suis déçu que tu me jettes comme ça sans politesse. Sans rancune?"), 100);
setTimeout(receiveMessage("Salut beauté ça va faire plus d'un mois qu'on c'est plus parlé!"), 100);
setTimeout(sendMessage("Disparais! Je ne veux plus te voir!"), 200);
setTimeout(receiveMessage("Très bien. Je disparais. Tu mérite bien ma haine sur ma page Denis la Menace. Tu n'est qu'une ****. J'espère que tu regrettes."), 100);
