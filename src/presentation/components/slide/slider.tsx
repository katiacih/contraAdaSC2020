import React, { useState } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

type SlideType = {
  index: number
  headline: string
  textButton: string
  src: string
}

type SlideContent = SlideType & {
  isCurrentSlide: boolean
  totalSlides: number
}

type Props = {
  slides: SlideType[]
}

const SlideContent: React.FC<SlideContent> = ({ headline, index, src, textButton, totalSlides, isCurrentSlide }: SlideContent) => {

  return (
    <div className={css(styles.slideshowContainer)}>
      <div className={css( isCurrentSlide ? styles.mySlideCurrent : styles.mySlides, styles.fade)}>
        <div className={css(styles.numberText)}
        >{index}/{totalSlides}</div>
        <img src={src} alt={headline} className={css(styles.img)} />
        <div className={css(styles.text)}>{headline}</div>
      </div>
    </div>
  )
  
}

export const Slider: React.FC<Props> = ({ slides }: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  function setNewCurrentSlide(n: number) {
    setCurrentSlide(n)
  }

  function setSlides(index: number) {
    setCurrentSlide(index)
  }

  function nextSlides() {
    const newIndex = currentSlide + 1 < slides.length ? currentSlide + 1 : 0
    setSlides(newIndex)
    
  }

  function prevSlides() {
    const newIndex = currentSlide > 0 ? currentSlide - 1 : slides.length - 1
    setSlides(newIndex)
  }


  return (
    <div className={css(styles.containerSlide)}>
        {
        slides.map((item, index) => (

          <SlideContent
            key={index}
            isCurrentSlide={item.index === currentSlide}
            headline={item.headline}
            index={index}
            src={item.src}
            textButton={item.textButton}
            totalSlides={slides.length}
          />
          ))
          
        }

        <button className={css(styles.prevNext)} onClick={() => prevSlides()}>&#10094;</button>
        <button  className={css(styles.prevNext, styles.btnNext)} onClick={() => nextSlides()}>&#10095;</button>
  
      <br />
      <div style={{ textAlign: 'center' }}>
        {
          slides.map((_, index) => (
            <span key={index} className={css(styles.dot, currentSlide === index ? styles.dotActive : null)} onClick={() => setNewCurrentSlide(index)}></span>
            ))
        }
       </div> 
      

    </div>
  )
}

const fade = {
  'from': {opacity: .4},
  'to': {opacity: 1}
}

const styles = StyleSheet.create({
  containerSlide: {
    width: '100%',
    display: 'block',
    position: 'relative'

  },
  slideshowContainer: {
    maxWidth: 1000,
    position: 'relative',
    margin: 'auto'
  },

  mySlides: {
    display: 'none'
  },

  mySlideCurrent: {
    display: 'block'
  },

  img: {
    height: 'auto',
    maxHeight: '605px'
  },

  prevNext: {
    cursor: 'pointer',
    position: 'absolute',
    top: '50%',
    width: 'auto',
    marginTop: '-22px',
    padding: '16px',
    color: 'var(--primary-color)',
    fontWeight: 'bold',
    transition: '0.6s ease',
    borderRadius: '0 3px 3px 0',
    userSelect: 'none',
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '36px',

    ':hover': {
      backgroundColor: 'rgba(0,0,0,0.8)'
    }
  },

  btnNext: {
    right: 0,
    borderRadius: '3px 0 0 3px'
  },

  text: {
    color: 'var(--rosa-dark)',
    fontSize: '22px',
    padding: '8px 12px',
    position: 'absolute',
    bottom: '8px',
    width: '100%',
    textAlign: 'center',
    fontFamily: 'Josefin Sans, sans-serif',
    fontWeight: 'bold'
  },

  numberText: {
    color: '#f2f2f2',
    fontSize: '12px',
    padding: '8px 12px',
    position: 'absolute',
    fontFamily: 'Josefin Sans, sans-serif',
    top: '0'
  },

  dot: {
    cursor: 'pointer',
    height: '15px',
    width: '15px',
    margin: '0 2px',
    backgroundColor: '#bbb',
    borderRadius: '50%',
    display: 'inline-block',
    transition: 'background-color 0.6s ease',

    ':active': {
      backgroundColor: '#717171'
    },
    ':hover': {
      backgroundColor: '#717171'
    }
  },

  dotActive: {
    backgroundColor: '#717171'
  },

  fade: {
    animationName: fade,
    animationDuration: '1.5s'
  }



})