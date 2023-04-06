import {
	Card,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeaderCell,
	TableRow,
} from "@tremor/react";

const users: {
	id: string;
	name: string;
	email: string;
	github: string;
}[] = [
	{
		id: "1",
		name: "John Doe",
		email: "john@doe.com",
		github: "johnDoe",
	},
	{
		id: "2",
		name: "Marie Müller",
		email: "marie@mueller.com",
		github: "Marie29",
	},
	{
		id: "3",
		name: "Kevin Smith",
		email: "kevin@smith.com",
		github: "KevinIsCool",
	},
	{
		id: "4",
		name: "Mohammed Ali",
		email: "mohammed@web.de",
		github: "MohaMMed",
	},
	{
		id: "5",
		name: "Ana Gomes",
		email: "ana@gomes.com",
		github: "Anitta90",
	},
	{
		id: "6",
		name: "Sebastian Rein",
		email: "sebastian@gmail.com",
		github: "SebasRein",
	},
	{
		id: "7",
		name: "Yating Wang",
		email: "yating@wang.com",
		github: "YaoWang",
	},
];

export default function ListOfUsers() {
	return (
		<Card>
			<Table>
				<TableHead>
					<TableRow>
						<TableHeaderCell> ID </TableHeaderCell>
						<TableHeaderCell> Name </TableHeaderCell>
						<TableHeaderCell> Email </TableHeaderCell>
						<TableHeaderCell> Actions </TableHeaderCell>
					</TableRow>
				</TableHead>

				<TableBody>
					{users.map((item) => (
						<TableRow key={item.name}>
							<TableCell>{item.id}</TableCell>
							<TableCell style={{ display: "flex", alignItems: "center" }}>
								<img
									style={{
										width: "32px",
										height: "32px",
										borderRadius: "50%",
										marginRight: "8px",
									}}
									src={`https://unavatar.io/github/${item.github}`}
									alt={item.name}
								/>
								{item.name}
							</TableCell>
							<TableCell>{item.email}</TableCell>
							<TableCell>Actions</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Card>
	);
}
