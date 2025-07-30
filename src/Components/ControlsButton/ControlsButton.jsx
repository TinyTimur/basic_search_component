import styles from './ControlsButton.module.scss';

export function ControlsButton({ content, handleControlsClick }) {
    return (
        <>
            <button
                className={styles.controlsButton}
                onClick={handleControlsClick}
            >
                <h4>{content}</h4>
            </button>
        </>
    );
}
