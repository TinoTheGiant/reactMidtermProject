import './App.css';

const squad = [
  { id: 1, number: 1, player: 'André Onana', position: 'Goalkeeper' },
  { id: 2, number: 2, player: 'Victor Lindelöf', position: 'Defender' },
  { id: 3, number: 3, player: 'Noussair Mazraoui', position: 'Defender' },
  { id: 4, number: 4, player: 'Matthijs de Ligt', position: 'Defender' },
  { id: 5, number: 5, player: 'Harry Maguire', position: 'Defender' },
  { id: 6, number: 6, player: 'Lisandro Martínez', position: 'Defender' },
  { id: 7, number: 7, player: 'Mason Mount', position: 'Midfielder' },
  { id: 8, number: 8, player: 'Bruno Fernandes', position: 'Midfielder' },
  { id: 9, number: 9, player: 'Rasmus Højlund', position: 'Forward' },
  { id: 10, number: 10, player: 'Marcus Rashford', position: 'Forward' },
  { id: 11, number: 11, player: 'Joshua Zirkzee', position: 'Forward' },
  { id: 12, number: 12, player: 'Tyrell Malacia', position: 'Defender' },
  { id: 13, number: 14, player: 'Christian Eriksen', position: 'Midfielder' },
  { id: 14, number: 15, player: 'Leny Yoro', position: 'Defender' },
  { id: 15, number: 16, player: 'Amad Diallo', position: 'Forward' },
  { id: 16, number: 17, player: 'Casemiro', position: 'Midfielder' },
  { id: 17, number: 18, player: 'Daniel Gore', position: 'Midfielder' },
  { id: 18, number: 20, player: 'Diogo Dalot', position: 'Defender' },
  { id: 19, number: 21, player: 'Antony', position: 'Forward' },
  { id: 20, number: 23, player: 'Luke Shaw', position: 'Defender' },
  { id: 21, number: 25, player: 'Manuel Ugarte', position: 'Midfielder' },
  { id: 22, number: 35, player: 'Jonny Evans', position: 'Defender' },
  { id: 23, number: 37, player: 'Kobbie Mainoo', position: 'Midfielder' },
  { id: 24, number: 44, player: 'Dermot Mee', position: 'Goalkeeper' },
  { id: 25, number: 75, player: 'Habeeb Ogunneye', position: 'Defender' },
];

function Squads() {
  return (
    <div className="squad-container">
      <ul className="squad-list">
        {squad.map((player) => (
          <li
            key={player.id}
            style={{
              color: [17, 24, 25].includes(player.id) ? 'yellow' : 'white', // U21 players in yellow
            }}
          >
            <b>{player.player}</b> <i>({player.position})</i> Jersey No: {player.number}
          </li>
        ))}
        <small>* Yellow is youth player</small>
      </ul>
      <img src="/team.webp" alt="kit" className="squad-image" />
    </div>
  );
}

export default Squads;
