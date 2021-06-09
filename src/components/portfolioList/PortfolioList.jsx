import "./portfolioList.scss"

export default function PortfolioList({ id, title, active, setSelected }) {
    return (
        <li className={active ? "active portfolioList" : "portfolioList"}
            onClick={() => setSelected(id)} >
            {title}
        </li>
    )
}
