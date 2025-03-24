import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { createTw } from "react-pdf-tailwind"


const tw = createTw({
    theme: {
      fontFamily: {
        "sans serif": ["Quicksand"],
      },
      extend: {
        colors: {
          theme1: "#33373f",
          theme2: "#3d424c"
        },
      },
    },
  });




const Resume = ({resumeData}) => {

    return <Document>
        <Page size="A4" style={tw("p-14")}>
            {resumeData["personal information"].map((entry, idx) => (
                <View key={idx} style={tw("flex flex-row justify-between items-start border-b-2 border-theme2 mb-4")}>
                    <View style={tw("flex flex-col text-4xl font-bold leading-none text-theme1")}>
                        <Text>{entry["first name"]}</Text>
                        <Text>{entry["last name"]}</Text>
                        <Text style={tw("mt-2 mb-4 font-bold text-[16px] text-gray-500")}>{entry.role}</Text>
                    </View>
                    <View style={tw("flex flex-col items-end gap-1 text-[12px] text-theme2")}>
                        <Text>{entry.email}</Text>
                        <Text>{entry.phone}</Text>
                        <Text>{entry.location}</Text>
                    </View>
                </View>
            ))}
            <View style={tw("flex flex-col gap-2")}>
                <View style={tw("my-2")}>
                    <Text style={tw("font-bold text-2xl leading-5 text-theme1 mb-2")}>{resumeData["summary"][0].summary && "SUMMARY"}</Text>
                    <Text style={tw("text-theme2 text-lg leading-[1.3]")}>{resumeData["summary"][0].summary}</Text>
                </View>

                <View style={tw("my-2")}>
    
                    <Text style={tw("font-bold text-2xl leading-5 text-theme1 mb-2")}>{resumeData["work experience"][0].role && "WORK EXPERIENCE"}</Text>
                   {resumeData["work experience"].map((entry, idx) => (
                        <View style={tw("flex flex-col text-theme2 text-lg leading-none")} key={idx}>
                            <Text style={tw("text-theme1 font-bold")}>{entry.role && entry.role + ' \u007c ' + entry.company}</Text>
                            <Text style={tw("italic text-[12px] mb-2")}>{entry.from && entry.from + ' \u2013 ' + entry.to}</Text>
                            {console.log(entry.responsibilities)}
                            <Text style={tw("ml-4 leading-[.85]")}>
                            {entry.responsibilities && 
                            '\u2022 ' + entry.responsibilities.replace(/\n/g, '\n\u2022 ')
                            }
                            </Text>
                        </View>
                    ))}
                </View>

                <View style={tw("my-2")}>
                    <Text style={tw("font-bold text-2xl leading-5 text-theme1 mb-2")}>{resumeData["education"][0]["school name"] && "EDUCATION"}</Text>
                   {resumeData["education"].map((entry, idx) => (
                        <View style={tw("text-lg leading-none text-theme1 font-bold")} key={idx}>
                            <View style={tw("flex flex-row gap-2")}>
                                <Text>{entry.degree && entry.degree + ' in ' + entry.field}</Text>
                                <Text>{entry["school name"] && '\u007c ' + entry["school name"]}</Text>
                            </View>
                            <Text>{entry.location}</Text>
                            <Text style={tw("italic text-[12px] mb-2 text-theme2 font-medium")}>{entry.from && entry.from + ' \u2013 ' + entry.to}</Text>
                        </View>
                    ))}
                </View>

                <View style={tw("my-2")}>
                    <Text style={tw("font-bold text-2xl leading-5 text-theme1 mb-2")}>{resumeData["skills"][0]["skills"] && "SKILLS"}</Text>
                    {resumeData["skills"].map((entry, idx) => (
                        <View style={tw("text-theme2 text-lg leading-none")} key={idx}>
                            <Text>
                                {entry.skills && entry.skills.replace(/\n/g, ' \u2022 ')}
                            </Text>
                        </View>
                    ))}
                </View>

                <View style={tw("my-2")}>
                    <Text style={tw("font-bold text-2xl leading-5 text-theme1 mb-2")}>{resumeData["projects"][0]["title"] && "PROJECTS"}</Text>
                    {resumeData["projects"].map((entry,idx) => (
                        <View style={tw("flex flex-col mb-3 text-theme2 text-lg leading-none gap-2")}>
                            <Text style={tw("text-theme1 font-bold text-xl leading-none")}>{entry.title}</Text>
                            <Text style={tw("underline")}>{entry.link}</Text>
                            <Text>{entry.description}</Text>
                        </View>
                    ))}
                </View>
                <View style={tw("my-2")}>
                    <Text style={tw("font-bold text-2xl leading-5 text-theme1 mb-2")}>{resumeData["awards"][0]["title"] && "AWARDS"}</Text>
                    {resumeData["awards"].map((entry,idx) => (
                        <View>
                            <Text>
                            
                            </Text>
                        </View>
                    ))}
                </View>
                <View style={tw("my-2")}>
                    <Text style={tw("font-bold text-2xl leading-5 text-theme1 mb-2")}>{resumeData["certifications"][0]["title"] && "CERTIFICATIONS"}</Text>
                    {resumeData["certifications"].map((entry,idx) => (
                        <View style={tw("text-theme-1 flex flex-col mb-2 text-[12px] font-bold")}>
                            <Text>{entry.title}</Text>
                            <Text>{entry["date received"]}</Text>
                            <Text>{entry.organization}</Text>
                        </View>
                    ))}
                </View>
                <View style={tw("my-2")}>
                    <Text style={tw("font-bold text-2xl leading-5 text-theme1 mb-2")}>{resumeData["socials"][0]["site"] && "SOCIAL NETWORKS"}</Text>
                    {resumeData["socials"].map((entry,idx) => (
                        <View>
                            <Text>
                            
                            </Text>
                        </View>
                    ))}
                </View>
            </View>


        
        </Page>
    </Document>
}

export default Resume;