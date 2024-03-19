import { LineChart as LChart, Line, XAxis, YAxis, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "green", "blue"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? "start" : "end"} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

const LineChart = () => {
    const students = [
        {
            name: "Student 1",
            mathMarks: 83,
            physicsMarks: 53,
            chemistryMarks: 66,
        },
        {
            name: "Student 2",
            mathMarks: 96,
            physicsMarks: 85,
            chemistryMarks: 78,
        },
        {
            name: "Student 3",
            mathMarks: 76,
            physicsMarks: 92,
            chemistryMarks: 89,
        },
        {
            name: "Student 4",
            mathMarks: 86,
            physicsMarks: 75,
            chemistryMarks: 91,
        },
        {
            name: "Student 5",
            mathMarks: 91,
            physicsMarks: 81,
            chemistryMarks: 79,
        },
        {
            name: "Student 6",
            mathMarks: 88,
            physicsMarks: 92,
            chemistryMarks: 95,
        },
        {
            name: "Student 7",
            mathMarks: 95,
            physicsMarks: 89,
            chemistryMarks: 87,
        },
        {
            name: "Student 8",
            mathMarks: 90,
            physicsMarks: 80,
            chemistryMarks: 88,
        },
        {
            name: "Student 9",
            mathMarks: 96,
            physicsMarks: 66,
            chemistryMarks: 63,
        },
        {
            name: "Student 10",
            mathMarks: 87,
            physicsMarks: 95,
            chemistryMarks: 55,
        },
    ];

    return (
        <div className="w-full">
            <LChart width={900} height={400} data={students}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Line dataKey="mathMarks" stroke="red"></Line>
                <Line dataKey="physicsMarks" stroke="yellow"></Line>
            </LChart>

            <BarChart width={900} height={400} data={students}>
                <XAxis dataKey="name"></XAxis>
                <YAxis dataKey={"mathMarks"}></YAxis>
                <Bar dataKey={"physicsMarks"} fill="red"></Bar>
                <Bar dataKey={"mathMarks"} fill="yellow"></Bar>
            </BarChart>

            <PieChart width={900} height={400}>
                <Pie
                    cx={"50%"}
                    cy={"50%"}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    fill="green"
                    outerRadius={80}
                    data={students}
                    dataKey={"physicsMarks"}>
                    {students.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </div>
    );
};

export default LineChart;
