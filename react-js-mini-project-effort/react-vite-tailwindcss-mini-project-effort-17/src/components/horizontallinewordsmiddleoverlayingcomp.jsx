import React from 'react';

const HorizontalWordsMiddleOverlayingComp = () => {
  return (
    <>
      <HorizontalLineWithText/>
    </>
  );
}

export default HorizontalWordsMiddleOverlayingComp;

const HorizontalLineWithText = () => {
    return (
      <div>
        <section style={styles.section}>
          <h1>Section 1</h1>
        </section>
        <div style={styles.container}>
          <div style={styles.line}></div>
          <span style={styles.text}>Divider Text</span>
        </div>
        <section style={styles.section}>
          <h1>Section 2</h1>
        </section>
      </div>
    );
  };

  const styles = {
    section: {
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f4f4f4',
      borderBottom: '1px solid #ddd',
    },
    container: {
      position: 'relative',
      textAlign: 'center',
      margin: '40px 0',
    },
    line: {
      width: '100%',
      borderBottom: '2px solid #3498db',
      position: 'absolute',
      top: '50%',
      left: 0,
      right: 0,
    },
    text: {
      position: 'relative',
      zIndex: 1,
      backgroundColor: 'white',
      padding: '0 10px',
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#3498db',
    },
  };
  


