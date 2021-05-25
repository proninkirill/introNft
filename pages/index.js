import {useState} from 'react';
import {useRouter} from 'next/router'
import Head from 'next/head'
import {Grid} from '@material-ui/core';
import {Modal, Button} from 'react-bootstrap';
import validator from 'validator';
import Axios from 'axios';



export default function Home() {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState();
  const [emailErr, setEmailErr] = useState(true);
  const handleClose = () =>{
    setShow(false);
  }
  const handleSubscribe = () =>{
    setShow(true);
  }
  const handleInput = (e) =>{
    console.log(e.target.value)
    setEmail(e.target.value);
    if(validator.isEmail(e.target.value)){
      setEmailErr(false)
    }
    else{
      setEmailErr(true);
    }
  }
  const handleTelegram = () =>{
    router.push("https://t.me/NFThubs");
  }
  const sendEmail = () =>{
      if(!emailErr){
        Axios.post("/api/hello",{email: email})
        .then((res)=>{
          console.log(res.data);
          setShow(false);
        })
    }
  }
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <div id="fb-root"></div>
        <div class="fb-customerchat"
          attribution="biz_inbox"
          page_id="106165191649883">
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>subscribe</Modal.Title>
          </Modal.Header>
          <Modal.Body><input type = "email" className = "x-subscribe-input" placeholder = "please enter your email!" onChange = {handleInput} style = {emailErr?{border: "2px solid red"}: {border: "2px solid green"}}/></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={sendEmail}>
              subscribe
            </Button>
          </Modal.Footer>
        </Modal>
        <div className = "x-home-container">
          <div>
            <div  className = "diceGrid">
              <a href = "/"><img src = "/img/logo.png" width = "300px"/></a>
            </div>
            <div className = "mt-5 diceGrid">
              <Grid container className = "mb-5">
                <Grid item xs = {0} sm = {1} md = {6} lg = {7}></Grid>
                <Grid item xs = {12} sm = {11} md = {6} lg = {5}>
                  <div className = "x-font1 float-right mb-3">
                    <span className = "x-font1">Welcome to </span><br/>
                    <span className = "x-font2">Denmark'</span>
                    <span className = "x-font3">s first upcoming online NFT marketplace.</span>
                  </div>
                  <div className = "x-font4 mb-3">
                    Through an online NFT community, NFThub.dk established a unique oppor-tunity for Artists and enthusiasts to establish a connection through sharing and selling digital art.
                  </div>
                  <div>
                    <button className = "x-subscribe-button" onClick = {handleSubscribe}>SUBSCRIBE NOW</button>
                  </div>
                </Grid>
              </Grid>
            </div>
            <div className = "diceGrid1">
              <img src = "/img/icon_group.png" alt = "icon_group" width = "100%" />
            </div>
          </div>
        </div>
        <div className = "x-intro-container">
          <div className = "diceGrid">
            <Grid container>
              <Grid item xs = {12} sm = {12} md = {6}>
                <div className = "x-font2 mb-3">
                  Introducing Nfthub,
                </div>
                <div className = "x-font1 mb-3">
                  an online marketplace for creators and fan to buy,sell, mint & collect content NFTs - all in one web app.
                </div>
                <button className = "x-join-telegram-button" onClick = {handleTelegram}>JOIN TELEGRAM</button>
              </Grid>
              <Grid item xs = {12} sm = {12} md = {6}>
                <img src = "/img/middle_img.png" alt = "about" width = "100%"/>
              </Grid>
            </Grid>
          </div>
          <div className = "diceGrid">
            <div className = "text-right">
              <div className = "x-font5">
                Monetize Media
              </div>
              <div className = "x-font6">
                in Minutes
              </div>
            </div>
            <Grid container>
              <Grid item xs = {12} sm = {12} md = {4} className = "x-collectible-content">
                <img src = "/img/collectible1.png" alt = "collectible1" width = "100%"/>
              </Grid>
              <Grid item xs = {12} sm = {12} md = {4} className = "x-collectible-content mt-4">
                <img src = "/img/collectible2.png" alt = "collectible2" width = "100%"/>
              </Grid>
              <Grid item xs = {12} sm = {12} md = {4} className = "x-collectible-content mt-5">
                <img src = "/img/collectible3.png" alt = "collectible3" width = "100%"/>
              </Grid>
            </Grid>
          </div>
          <div className = "x-bottom-container">
            <img src = "/img/bottom_img.png" alt = "bottom-img" width = "100%" />
          </div>
          <div className = "x-font7 text-center">
            @NFTHUB.COM
          </div>
        </div>
      </div>
    </div>
  )
}