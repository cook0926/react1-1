const styles ={
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirecion: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    imageContainer: {},
    image: {
        width: 50,
        heigth: 50,
        borderRadius: 25,
    },
    contentContainer:{
        marginLeft: 8,
        display: "flex",
        flexDirecion: "column",
        justifyContent: "center",
    },
    nameText:{
        color: "black",
        fontSize: 16,
        fontWeigth: "bold",
    },
    commentText:{
        color: "black",
        fontSize: 16,
    },
    
};



export default function Comment(props){
    return(
        <div style={styles.wrapper}>
            <div style={styles.imageContainer}>
                <img
                    src="https://i.namu.wiki/i/okCwO2srK-E8r4eRFyy8NX4JZNTD5qOej-ntm3Y92HmEyDcdqR8rVu5lpGV82AAycTtLLwfRGPq1xZeNqEUMpYaCFN6Z__Ctkch_izEjup4i3KYaDf0xksCezf0hFPouQhY82Zv9Eutuc4hUPRzsRQ.svg"
                    style={styles.image}
                    alt="프로필 이미지"
                />
            </div>

            <div style={styles.contentContainer}>
                <span style={styles.nameText}>{props.name}</span>
                <span style={styles.commentText}>{props.comment}</span>
            </div>
        </div>
    )
}