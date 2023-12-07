const Composition = ({ addEmoji, addBrackets, addasterisk }) => {
  let txt = 'Iam from Black Hole';
  if (addEmoji) {
    txt = addEmoji(txt, '🚀');
  }
  if (addBrackets) {
    txt = addBrackets(txt);
  }
  if (addasterisk) {
    txt = addasterisk(txt);
  }
  return txt;
};

export default Composition;
