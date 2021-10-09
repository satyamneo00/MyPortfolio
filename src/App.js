import logo from './logo.svg';
import './App.css';
import Landing from './Components/Landing';
import About from './Components/About';
import Layout from './UI/Layout';
import {useState} from 'react';
import Animated from 'react-mount-animation';
import {Route, Switch} from 'react-router';
import Work from './Pages/Work';

function App() {
    const [landingVisible, setLandingVisible] = useState(true);
    setTimeout(() => {
        setLandingVisible(false);
    }, 8000)
    return (

        <Layout>
          <Switch>
            
            <Route path="/about" exact> 
              <About/>
            </Route>
            <Route path="/work" exact>
                <Work/>
            </Route>
            <Route path="*">
            {
                landingVisible && <Landing/>
            }
                <Animated.div show={
                        !landingVisible
                    }
                    mountAnim={`0%{opacity:0} 100%{opacity:100}`}>
                    <About/>
                </Animated.div>
            </Route>
            </Switch>
        </Layout>
    );
}

export default App;
