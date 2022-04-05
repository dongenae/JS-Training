export function i18n(strings, ...vars) {
  // utilitaire basique d'internationalisation
  // remplace chaque fragment de texte avec i18n.translate

  // Entre double `` le code qui est mis dans ${} est exécuté
  return strings.reduce(
    (out, str, i) => `${out}${i18n.translate(str)}${vars[i] || ""}`,
    ""
  );
}

Object.assign(i18n, {
  locale: "fr",
  locales: {
    fr: {
      "Hello ": "Bonjour ",
      ", you have ": ", vous avez ",
      " new mails.": " nouveaux messages."
    }
  },
  translate(str) {
    let messages = i18n.locales[i18n.locale] || {};
    return messages[str] || str;
  }
});

const name = "Bob",
  nbMails = 3;

// si on met "function`...`" tout collé alors ca transforme la
// string en deux objets :
// 1) un tableau contenant les string en durs
// 2) plusieurs attributs contenant chacun un élément variable
// En gros on obtient : strings, var1, var2, var3, ... (qu'on peut
// rest avec "strings, ...vars" dans la signature de la méthode)
console.log(i18n`Hello ${name}, you have ${nbMails} new mails.`);
