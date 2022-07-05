import CostItem from "./components/CostItem";

function App() {
    const costs = [
        {
            date: new Date(2021, 7, 23),
            description: "Комп",
            amount: 999.99,
        },
        {
            date: new Date(2021, 4, 12),
            description: "MacBook",
            amount: 2200,
        },

        {
            date: new Date(2021, 2, 28),
            description: "Джинсы",
            amount: 49.99,
        },
    ];

    return (
        <div>
            <h1>React Developer</h1>
            <CostItem
                date={costs[0].date}
                description={costs[0].description}
                amount={costs[0].amount}
            />
            <CostItem
                date={costs[1].date}
                description={costs[1].description}
                amount={costs[1].amount}
            />
            <CostItem
                date={costs[2].date}
                description={costs[2].description}
                amount={costs[2].amount}
            />
        </div>
    );
}

export default App;
