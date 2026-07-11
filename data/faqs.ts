/**
 * Google exige que el FAQPage schema describa contenido que el usuario puede
 * ver en la pagina. Estas preguntas se consumen dos veces desde la misma
 * fuente: el acordeon visible y el JSON-LD. No duplicar el texto a mano.
 *
 * Reglas de docs/content-guidelines.md: sin afirmaciones medicas ni de
 * seguridad sin respaldo, sin superlativos, sin testimonios inventados.
 * Las FAQ de cada pagina de ciudad deben ser DISTINTAS de estas.
 */

export type Faq = {
  question: string;
  answer: string;
};

/**
 * Cada pagina tiene SUS preguntas. Repetir las mismas entre paginas de ciudad
 * cambiando el nombre de la ciudad es contenido duplicado, y ademas hace que
 * el FAQPage schema de las dos paginas sea identico.
 */

export const HOME_FAQS: Faq[] = [
  {
    question: "How long do eyelash extensions last?",
    answer:
      "A full set follows your natural lash cycle, so it stays looking full for roughly two to three weeks before you will want a fill. Your natural lashes shed and regrow continuously, which means extensions gradually fall away with them rather than all at once. Most clients come back every two to three weeks to keep their set looking fresh.",
  },
  {
    question: "Will lash extensions damage my natural lashes?",
    answer:
      "Applied correctly, they should not. Each extension is isolated onto a single natural lash and its length and thickness are matched to what that lash can carry, so nothing is weighed down or glued together. Damage usually comes from extensions that are too heavy, from lashes stuck together at the base, or from picking and pulling at them at home.",
  },
  {
    question: "Which type of lash set should I choose?",
    answer:
      "Classic gives one extension per natural lash and reads like a soft coat of mascara. Hybrid mixes classic and volume for texture and a fuller look. Volume uses lightweight handmade fans for a denser, more dramatic set. If you are not sure, we settle it together during the consultation at the start of your appointment.",
  },
  {
    question: "Where is the studio, and can I get there by SkyTrain?",
    answer:
      "It is a private home studio in Burnaby, a short walk from Lougheed Town Centre SkyTrain station, which puts it within easy reach of New Westminster and Coquitlam on the Millennium and Expo lines. You get the exact address when your appointment is confirmed.",
  },
];

export const CLASSIC_FAQS: Faq[] = [
  {
    question: "What is the difference between a half set and a full set?",
    answer:
      "A full set places an extension on every natural lash that can carry one. A half set concentrates them along the outer two-thirds of the lash line, where they open up the eye most, and leaves the inner corner bare. A half set is lighter, cheaper and quicker, and it suits anyone who wants their own lashes to still read as their own.",
  },
  {
    question: "Will classic lashes look obvious?",
    answer:
      "That is rather the point of them — they should not. One extension per natural lash means the density of your lash line does not change, only the length and the curl. Most people read the result as a good night of sleep rather than as extensions.",
  },
  {
    question: "Can I still wear mascara?",
    answer:
      "You will not want to, and that is usually the appeal. Mascara on extensions is difficult to remove without dragging on the bond, and oil-based removers break the adhesive down. If you feel you need mascara over a classic set, it is a sign the set should have been hybrid.",
  },
];

export const HYBRID_FAQS: Faq[] = [
  {
    question: "What makes a set hybrid?",
    answer:
      "It mixes two techniques on the same lash line: single extensions like a classic set, and handmade fans of finer extensions like a volume set. The single lashes give definition, the fans fill the gaps between them. The ratio is adjustable, so a hybrid can lean closer to classic or closer to volume.",
  },
  {
    question: "Who does hybrid suit best?",
    answer:
      "People whose natural lashes have gaps in them. A classic set can only be as dense as the lashes underneath it, so if there are spaces along the lash line, a classic set will show them. Fans fill that space without adding a heavy extension to a lash that cannot carry one.",
  },
  {
    question: "Do hybrid lashes last longer than classic?",
    answer:
      "They do not last longer, but they look full for longer. Both follow the same natural shedding cycle. The difference is that when a lash sheds from a hybrid set, the fans around it disguise the gap, so the set reads as full further into the cycle.",
  },
];

export const VOLUME_FAQS: Faq[] = [
  {
    question: "What do 2D, 4D and mega volume actually mean?",
    answer:
      "The number counts how many extensions are in each handmade fan placed on a single natural lash. A 2D fan has two, a 4D has four. Mega volume generally means fans of six or more. As the count goes up, each individual extension has to get finer, so that the whole fan still weighs no more than the lash beneath it.",
  },
  {
    question: "Are volume lashes heavier than classic ones?",
    answer:
      "A well-made fan should not be. That is the entire reason volume extensions are made from much finer fibre than classic ones — a 6D fan of very fine lashes can weigh the same as one thicker classic extension. What causes problems is a fan built from fibre that is too thick for the count, which is a question of how the fan is made, not of how many lashes are in it.",
  },
  {
    question: "How long does a volume appointment take?",
    answer:
      "Longer than classic, because the fans are made by hand during the appointment rather than picked ready-made. Budget two and a half hours for a light volume full set and around three for mega volume. The durations listed with each price are realistic rather than optimistic.",
  },
];

export const NEW_WESTMINSTER_FAQS: Faq[] = [
  {
    question: "How do I get to the studio from New Westminster?",
    answer:
      "The Expo Line branch that runs towards Production Way–University goes from New Westminster and Columbia stations through Sapperton and Braid, and stops at Lougheed Town Centre. The studio is a short walk from there. No transfer, and no bridge.",
  },
  {
    question: "Do you travel to clients in New Westminster?",
    answer:
      "No — the work happens at the studio. Lash application needs controlled lighting, a proper lash bed and a room where nothing is moving, and none of that travels well in a bag.",
  },
  {
    question: "Can I drive instead?",
    answer:
      "You can. It is a straightforward run up the Brunette Avenue corridor from Sapperton, and there is parking on the street. Most clients coming from New West find the train simpler, particularly for a set that runs past two hours.",
  },
];

export const COQUITLAM_FAQS: Faq[] = [
  {
    question: "How far is the studio from Coquitlam Centre?",
    answer:
      "A few stops. The Millennium Line runs from Lincoln and Coquitlam Central through Burquitlam and into Lougheed Town Centre, where the studio is a short walk from the station. It is often quicker than driving the same distance at the end of the day.",
  },
  {
    question: "Do you take clients from Port Coquitlam?",
    answer:
      "Regularly. Port Coquitlam has no SkyTrain of its own, so most people either drive in or connect through Coquitlam Central. Either way it is a short trip, and the studio sits on the near side of Coquitlam rather than deep inside Burnaby.",
  },
  {
    question: "Is the studio actually in Coquitlam?",
    answer:
      "It is on the Burnaby side of the boundary, which the Lougheed area straddles. In practice the distinction matters less than the station: if you can get to Lougheed Town Centre, you are a walk away, whether you set off from Burquitlam or from Coquitlam Centre.",
  },
];
