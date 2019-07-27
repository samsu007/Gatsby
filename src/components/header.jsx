import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby'
import headerStyles  from './header.module.scss'


const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <div>
            <h1 className={headerStyles.title}>
                <Link  className={headerStyles.title} to="/">{data.site.siteMetadata.title}</Link>
            </h1>
            <ul className={headerStyles.ul}>
                <li><Link className={headerStyles.li} activeClassName={headerStyles.activeLi} to="/">Home</Link></li>
                <li><Link className={headerStyles.li} activeClassName={headerStyles.activeLi} to="/blog">Blog</Link></li>
                <li><Link className={headerStyles.li} activeClassName={headerStyles.activeLi} to="/about" >About</Link></li>
                <li><Link className={headerStyles.li} activeClassName={headerStyles.activeLi} to="/contact" >Contact</Link></li>
            </ul>
        </div>
    )
}


export default Header;