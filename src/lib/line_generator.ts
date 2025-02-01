export function lineGenerator(age) {
    if (!age) {
        return "Holy moley, are you an Aes Sedai? 'cuz I can't guess your age!";
    }

    const opening = `I think you're ${age} years old.`
    if (age < 13) {
        const currentHour = new Date().getHours();

        if (currentHour >= 20) {
            return opening + " Shouldn't you be in bed right now?";
        } else if (currentHour <= 6) {
            return opening + " I see you're trying to get more screen before you have to go to school."
        }

        return opening + " Are you old enough to be on the internet?";
    } else if (age < 18) {
        return opening + " The music you like today is going to be 'old people music' in 20 years.";
    } else if (age < 30) {
        return opening + " Trust me, life gets better when you turn 30.";
    } else if (age < 40) {
        return opening + " If you still consider high school your 'golden years' at this age, you need to move on.";
    } else if (age < 50) {
        return opening + " Trust me, your life was better when you were in your 30s.";
    } else if (age < 60) {
        return opening + " Retirement is just around the corner!";
    } else if (age < 70) {
        return opening + " Retirmement is just around the corner!";
    } else if (age < 80) {
        return opening + " I really promise that you'll be able to retire soon.";
    } else if (age < 90) {
        return opening + " Any day now, retirement will come.";
    } else {
        return opening + " What's it like to predate the Internet?";
    }
}