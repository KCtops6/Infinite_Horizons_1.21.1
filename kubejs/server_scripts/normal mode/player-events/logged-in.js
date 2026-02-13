const $LocalDateTime = Java.loadClass('java.time.LocalDateTime');
const $DateTimeFormatter = Java.loadClass('java.time.format.DateTimeFormatter');
PlayerEvents.loggedIn(event => {
    let now = $LocalDateTime.now();
    let formatter = $DateTimeFormatter.ofPattern("EEEE, MMMM dd, yyyy - hh:mm a");
    let formattedTime = now.format(formatter);
    event.player.tell([
        Text.gold('Welcome back to Infinite Horizons 2! '),
        Text.white(`The Server Time is ${formattedTime}`)
    ]);
    event.player.tell([
        Text.red('Note, the mod '),
        Text.darkRed('Generators Galore').bold(),
        Text.red(' is scheduled for removal in Version 2.1.')
    ])
});