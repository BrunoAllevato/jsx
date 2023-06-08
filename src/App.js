// 4) Create a component
function App() {
  const inputType ='number';
  const minValue = 5;
  const maxValue =10;
  const colorr = { color: 'red' };
  const listOpt = [1,2,3];
  const message = 'Enter age';

  return (
    <div className="wrapper">
      <h1>Hi there!</h1>
      <input
        type={inputType}
        min={minValue}
        max={maxValue}
        style={{...colorr, border:'1px solid blue', padding:'20px'}}
        list={[listOpt]}
        alt={message}
        spellCheck
        autoFocus
      />
    </div>
  );
 // <textarea autoFocus={true} placeholder="hi there" />;
}

export default App;
