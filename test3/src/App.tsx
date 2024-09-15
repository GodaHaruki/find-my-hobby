import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Question from './question';
import Request from './request';


function Home() {
return(
<Router>
<div>
    <nav>
        <ul>
            <h1>  </h1>
            <li><Link to="/question[1]">ここから始める</Link></li>
            <li><Link to="/request">お問い合わせ</Link></li>
        </ul>
    </nav>

    <Routes>
        <Route path="/puestion[1]" element={<Question />} />
        <Route path="/request" element={<Request />} />
    </Routes>
</div>
</Router>
);
}
export default Home;