import styles from './Skill.module.css'


const Skill = ({skillName, grade}) => {
	
	return (
		<li className={styles.skill}>
			{skillName}
			<span className={styles.votes}>{grade}</span>
		</li>
	)
}

export default Skill;