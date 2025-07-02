import { Switch, Route, Link } from 'wouter';
import Home from './pages/Home';
import About from './pages/About';
import Components from './pages/Components';
import NotFound from './pages/NotFound';
import './App.css'
import TailwindExample from './TailwindExample'
import MyCSSButton from './components/MyCSSButton/MyCSSButton'
import MyTailwindButton from './components/MyTailwindButton/MyTailwindButton'


function App() {
  return (
    <div className="app">
      <header className="app-header">
      {/* Navigation links */}
      <nav >
        <Link href="/">Home</Link> | <Link href="/about">About</Link> | <Link href="/components">Components</Link>
      </nav>

      </header>
      
      <main className="app-main">
        {/* Routes */}
        <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/components" component={MyCSSButton} />
      <Route path="/hello/:name"> {(params) => <h2>Hello, {params.name}!</h2>} </Route>
      <Route component={NotFound} />
      </Switch>
  
        <div className="traditional-cards">
          <section className="card">
            <h2>What is React?</h2>
            <p>React is a JavaScript library for building user interfaces.</p>
          </section>
          <section className="card">
            <h2>What is a Component?</h2>
            <p>A component is a reusable piece of code that returns HTML.</p>
          </section>
          
        </div>

        {/* Tailwind CSS Section */}
        <section className="mt-12">
          <TailwindExample />
        </section>
        
      </main>
    </div>
  )
}

export default App
