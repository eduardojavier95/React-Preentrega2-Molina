
import Logo from './Logo';

function Footer() {
    return (
        <footer className="flex flex-auto justify-center items-center mt-10 bg-gray-800 text-white p-4">
            <p>© 2021
                <Logo />
            </p>
        </footer >
    );
}

export default Footer;