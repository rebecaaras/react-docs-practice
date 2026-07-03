import { useState } from 'react';

// First challenge of docs page
export function SyncedInputs(){
  const [text, setText] = useState('')
  
  function handleChange(e){
    setText(e.target.value)
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
      <Input label="First input" text={text} onChange={handleChange}/>
      <Input label="Second input" text={text} onChange={handleChange}/>
    </div>
  )
}

function Input({label, text, onChange}){

  return(
    <label>
      {label}
      {' '}
      <input
        value={text}
        onChange={onChange}
      />
    </label>
  )
}

// First example
function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel 
        title="About" 
        isActive={activeIndex === 0}
        onShow={() => {setActiveIndex(0)}}
        >
        With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel 
        title="Etymology" 
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
      </Panel>
    </>
  );
}

function Panel({ title, children, isActive, onShow }) {

  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={onShow}>
          Show
        </button>
      )}
    </section>
  );
}


export default function ManagingStates(){
  return (
    <>
      <Accordion/>
      <hr/>
      <SyncedInputs/>
    </>
  )

}