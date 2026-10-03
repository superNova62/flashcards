import { useState } from 'react'

const Card = ({question, answer}) => {
    const [flipped, setFlipped] = useState(false);

    const onFlip = () => {
        setFlipped(!flipped)
    }


    return (
        <div className="Card" onClick={onFlip}>
            <div className={`card-inner ${flipped ? 'flipped': ''}` }>

                <div className="front-card" >
                {question}
                </div>

                <div className="back-card">
                {answer} 
                </div>

            </div>
        </div>
      
    )

}

export default Card