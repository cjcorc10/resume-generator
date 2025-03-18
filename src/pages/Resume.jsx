import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { createTw } from "react-pdf-tailwind"
import clsx from 'clsx';

const tw = createTw({
    theme: {
      fontFamily: {
        sans: ["Comic Sans"],
      },
      extend: {
        colors: {
          custom: "#bada55",
        },
      },
    },
  });

const Resume = ({state}) => {

    const styles = StyleSheet.create({
        page: {
          padding: 30,
          fontFamily: "Helvetica",
          color: "#333333"
        },
        header: {
            marginBottom: 20,
            borderBottom: "2px solid #D3D3D3",
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
        },
        leftHeader: {
            flexDirection: 'column'
        },
        rightHeader: {
            flexDirection: 'column',
            padding: 0,
            margin: 0,
            alignItems: 'flex-end',
        },
        rightEntry: {
            fontSize: 12,
            marginBottom: "5px",
            color: "#696969"
        },
        section: {
          marginBottom: 20,
        },
        sectionLine: {
            borderBottom: "2px solid #D3D3D3",
            width: "2rem",
            marginBottom: "10px",
        },
        title: {
          fontSize: 36,
          fontWeight: "bold",
          
        },
        sectionTitle: {
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: "10px",
        },
        entry: {
          color: "#696969",
        },
      });

    return <Document>
        <Page size="A4" style={styles.page}>
            {state["personal information"].map((entry, idx) => (
                <View key={idx} style={styles.header}>
                    <View style={styles.leftHeader}>
                        <Text style={styles.title}>{entry.name}</Text>
                        <Text style={{ marginBottom: 10, fontWeight: "bold", color: "#696969", fontSize: 14}}>{entry.role}</Text>
                    </View>
                    <View style={styles.rightHeader}>
                        <Text style={styles.rightEntry}>{entry.email}</Text>
                        <Text style={styles.rightEntry}>{entry.phone}</Text>
                        <Text style={styles.rightEntry}>{entry.location}</Text>
                    </View>
                </View>
            ))}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>SUMMARY</Text>
                <Text style={styles.sectionLine}></Text>
                <Text style={tw("list-inside")}>{state["summary"][0].summary}</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>WORK EXPERIENCE</Text>
                <Text style={styles.sectionLine}></Text>
                {state["work experience"].map((entry, idx) => (
                    <View style={tw("flex flex-col gap-2 my-2")} key={idx}>
                        <Text style={tw("font-bold")}>{entry.role && entry.role + '\u007c' + entry.company}</Text>
                        <Text style={tw("italic text-md")}>{entry.from && entry.from + '\u2013' + entry.to}</Text>
                        { entry.responsibilities && entry.responsibilities.split('\n').map((line, idx) => (
                            <Text key={idx}>{'\u2022' + line}</Text>
                        ))                        
                        }
                    </View>
                ))}
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>EDUCATION</Text>
                <Text style={styles.sectionLine}></Text>
                {state["education"].map((entry, idx) => (
                    <View key={idx}>
                        <Text>{entry["school name"]}</Text>
                        <Text>{entry.degree}</Text>
                        <Text>{entry.field}</Text>
                        <Text>{entry.from && entry.from + '\u2013' + entry.to}</Text>
                        
                    </View>
                ))}
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>SKILLS</Text>
                <Text style={styles.sectionLine}></Text>
                {state["skills"].map((entry, idx) => (
                    <View key={idx}>
                        <Text>{entry.skills}</Text>
                    </View>
                ))}
            </View>


        
        </Page>
    </Document>
}

export default Resume;