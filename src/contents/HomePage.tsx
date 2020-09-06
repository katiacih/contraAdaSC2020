import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

function HomePage () {
    return (
      <h1>
        Hello this is homepage
      </h1>
    );
}

export default HomePage;

const styles = StyleSheet.create({
  headingText: {
      fontFamily: 'sans-serif',
      fontSize: 20
  },
  bodyText: {
      fontFamily: 'sans-serif',
      fontSize: 12
  }
});