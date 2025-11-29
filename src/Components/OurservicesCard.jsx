

const OurservicesCard = ({ tittle, description, bgImage }) => {
    return (
        <div>
            <div>
                
                <h6 className="font-bold">{tittle}</h6>
                <p>{description}</p>
                <img src={bgImage} width="200px" height="100px" alt="service photo" className="rounded-3xl"/>


            </div>

        </div>
    )
}

export default OurservicesCard
