export default function AccordianItem({ question, num, currOpen, onOpen }) {
  //   const [isOpen, setIsOpen] = useState(false);
  const isOpen = num === currOpen;

  function handleOpen() {
    onOpen(!isOpen ? num : null);
  }

  return (
    <div>
      <h3 onClick={handleOpen} style={{ cursor: "pointer" }}>
        <span> {num < 9 ? `0${num + 1}` : num + 1} </span>
        {question.question}
        {isOpen ? <span>➖</span> : <span>➕</span>}
      </h3>
      {isOpen && <p> {question.answer} </p>}
    </div>
  );
}
