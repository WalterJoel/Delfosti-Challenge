export default function LCR(numPlayers: number, rolls: string): object {
	const chips = new Array(numPlayers).fill(3); // start with 3 chips each
	let centerChips = 0;
	let currentPlayer = 0;
	let offset = 0;
	let winner: any;

	const message: Record<string, any> = {};

	while (offset < rolls.length) {
		const numDice = Math.min(chips[currentPlayer], 3); // limit number of dice rolled by number of chips
		const turnRolls = rolls.slice(offset, offset + numDice);

		let leftChips = 0;
		let rightChips = 0;
		let centerChipsThisRoll = 0;

		turnRolls.split('').forEach((roll) => {
			switch (roll) {
				case 'L':
					leftChips++;
					break;
				case 'C': // C
					centerChipsThisRoll++;
					break;
				case 'R': // R
					rightChips++;
					break;
				default: // dot
					break;
			}
		});

		// update chip counts and current player
		offset += numDice;
		chips[currentPlayer] =
			chips[currentPlayer] - leftChips - rightChips - centerChipsThisRoll;
		chips[(currentPlayer + 1) % numPlayers] += leftChips;
		chips[(currentPlayer + numPlayers - 1) % numPlayers] += rightChips;
		centerChips += centerChipsThisRoll;
		currentPlayer = (currentPlayer + 1) % numPlayers;
		// check for winner
		const remainingPlayerChips = chips.filter((c) => c > 0);
		if (remainingPlayerChips.length === 1) {
			winner = chips.indexOf(remainingPlayerChips[0]);
			break; // game over
		}
	}
	chips.forEach((playerChips, index) => {
		const winnerMessage = winner === index ? ' (W)' : '';
		const lastPlayerMessage = currentPlayer === index ? ' (*)' : '';
		const indicatorMessage = winner ? winnerMessage : lastPlayerMessage;

		message[`Player ${index + 1}`] = playerChips + indicatorMessage;
	});
	// eslint-disable-next-line @typescript-eslint/dot-notation
	message['Center'] = centerChips;


	return message;
}