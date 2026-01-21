import { Outlet } from 'react-router';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';

const Layout = () => {
    return (
        <>
            <Header />
            <main id="main-content">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout