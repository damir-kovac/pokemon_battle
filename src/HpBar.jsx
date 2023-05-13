const HpBar = ({hp, maxHp}) => {
    
    const hp_percent= parseInt((hp/maxHp)*100);
    return (
        <div>
            <p className="hp"> {hp_percent}% </p>
            <div className="hpBar_container"
                style={{
                    borderColor:
                        (hp_percent>50 && "#079325") ||
                        ((hp_percent>30 && hp_percent<=50) && "#FFCC00") ||
                        (hp_percent<=30 && "red")
                }}
            >
                <div className="hpBar" 
                    style={{
                        width: hp_percent+"%",
                        backgroundColor: 
                            (hp_percent>50 && "#62FF84") ||
                            ((hp_percent>30 && hp_percent<=50) && "yellow") ||
                            (hp_percent<=30 && "#FF7575" )
                    }}
                ></div>
            </div>
        </div>
    )
}

export default HpBar;