const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div style={{ height: 400, width: 600, background: "cyan" }}>
            <h2>Layout Dashboard</h2>
                {children}
            </div>
        </>
    )
}

export default Layout