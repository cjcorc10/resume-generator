import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

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
                <Text style={styles.entry}>{state["summary"][0].summary}</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>WORK EXPERIENCE</Text>
                <Text style={styles.sectionLine}></Text>
                {state["work experience"].map((entry, idx) => (
                    <View key={idx}>
                        <Text>{entry.role} | {entry.company}</Text>
                        <Text>{entry.from} - {entry.to}</Text>
                    </View>
                ))}
            
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>EDUCATION</Text>
                <Text style={styles.sectionLine}></Text>

            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>SKILLS</Text>
                <Text style={styles.sectionLine}></Text>

            </View>


        
        </Page>
    </Document>
}

export default Resume;