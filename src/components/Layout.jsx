import MainNav from './MainNav'

export default function Layout(props) {
    return (
        <>
            <header className="app-header">
                <MainNav />
                <h1>Vite + React</h1>
            </header>
            <main>{props.children}</main>
            <footer className="app-footer">
                <p>
                    <a href="https://github.com/YokochiO/vite-react">こいつのリポジトリ</a>
                </p>
            </footer>
        </>
    )
}
