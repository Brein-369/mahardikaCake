import {
    useHistory
  } from 'react-router-dom'

export default function CakeCard(props:any) {
    const {name, price, imageUrl, id} = props
    const history = useHistory()
    const goToCake = () => {
        history.push('/'+id)
        history.go(0)
    }


    return (
        <div className="" 
            style={{    
                flexDirection: 'column',
                margin: "5px 30px",
                width: "250px", 
                padding: '15px',
            }}>
            <img src={imageUrl} className="row" alt="cake image" onClick={goToCake}
                style={{
                    width: '250px',
                    height: '250px',
                }}/>
            <p className='text-center' 
                style={{
                    width:'100%',
                    marginTop: '10px',
                    marginBottom: "5px",
                    paddingTop: '0px',
                }}>{name}</p>
            <p className="text-center" style={{
                    flexWrap:'wrap',
                    marginTop: '0px',
                    paddingTop: '0px'
                }}><strong>IDR {price}</strong></p>
        </div>
    )
}
