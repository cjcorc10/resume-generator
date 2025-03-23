const AdditionalSection = ({title, setShow}) => {

    return <button className="text-slate-400 cursor-pointer hover:text-slate-600 hover:scale-115 duration-200"
        onClick={() => setShow(prev => {
            const sections = [];
            for(let i in prev) {
                if(prev[i] !== title)
                    sections.push(prev[i])
            }
            console.log(sections);
            return sections;
        })}>
        {title}
    </button>
}

export default AdditionalSection;