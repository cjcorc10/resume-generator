import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { createTw } from "react-pdf-tailwind"
import clsx from 'clsx';

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


const Resume = ({state}) => {

    return <Document>
        <Page size="A4" style={tw("p-14")}>
            {state["personal information"].map((entry, idx) => (
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
                    <Text style={tw("font-bold text-2xl leading-5 text-theme1")}>SUMMARY</Text>
                    <Text style={tw("border-b-2 border-black w-12 mb-3")}></Text>
                    <Text style={tw("text-theme2 text-lg leading-[1.3]")}>{state["summary"][0].summary}</Text>
                </View>

                <View style={tw("my-2")}>
                    <Text style={tw("font-bold text-2xl leading-5 text-theme1")}>WORK EXPERIENCE</Text>
                    <Text style={tw("border-b-2 border-black w-12 mb-3")}></Text>
                    {state["work experience"].map((entry, idx) => (
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
                    <Text style={tw("font-bold text-2xl leading-5 text-theme1")}>EDUCATION</Text>
                    <Text style={tw("border-b-2 border-black w-12 mb-3")}></Text>
                    {state["education"].map((entry, idx) => (
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
                    <Text style={tw("font-bold text-2xl leading-5 text-theme1")}>SKILLS</Text>
                    <Text style={tw("border-b-2 border-black w-12 mb-3")}></Text>
                    {state["skills"].map((entry, idx) => (
                        <View key={idx}>
                            <Text>{entry.skills}</Text>
                        </View>
                    ))}
                </View>
            </View>


        
        </Page>
    </Document>
}

export default Resume;