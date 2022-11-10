document.querySelector('#btn-visualize').onclick = (event) => {
    document.querySelector('#first').classList.toggle('visualize');
};

document.querySelectorAll('.event-test').forEach((el) => {
    el.addEventListener('click', (event) => clickListenerShowPropagation(event, 'bubble'));
    // el.addEventListener('click', (event) => clickListenerShowPropagation(event, 'capture'), true);
});

function clickListenerShowPropagation(event, type) {
    const { target, currentTarget } = event;
    const targetLevel = parseInt(target.dataset.level);
    const currentLevel = parseInt(currentTarget.dataset.level);
    const baseDelayMs = 500;
    let showDelayMs = 0;

    if (type === 'bubble') {
        showDelayMs = baseDelayMs * (targetLevel - currentLevel);
    }
    else if (type === 'capture') {
        showDelayMs = baseDelayMs * (currentLevel - 1);
    }

    // Delay event propagation border
    setTimeout(
        (currentTarget) => currentTarget.classList.add('propagation'),
        showDelayMs,
        currentTarget
    );
    
    // Delay event propagation border removal
    setTimeout(
        (currentTarget) => currentTarget.classList.remove('propagation'),
        showDelayMs + baseDelayMs,
        currentTarget
    );
}