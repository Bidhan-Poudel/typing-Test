const paragraphs=[
    "He heard the song coming from a distance, lightly floating over the air to his ears. Although it was soft and calming, he was wary. It seemed a little too soft and a little too calming for everything that was going on. He wanted it to be nothing more than beautiful music coming from the innocent and pure joy of singing, but in the back of his mind, he knew it was likely some type of trap.",
    "There are different types of secrets. She had held onto plenty of them during her life, but this one was different. She found herself holding onto the worst type. It was the type of secret that could gnaw away at your insides if you didn't tell someone about it, but it could end up getting you killed if you did.",
    "She put the pen to paper but she couldn't bring herself to actually write anything. She just stared at the blank card and wondered what words she could write that would help in even a small way. She thought of a dozen ways to begin but none seemed to do justice to the situation. There were no words that could help and she knew it.",
    "He was after the truth. At least, that's what he told himself. He believed it, but any rational person on the outside could see he was lying to himself. It was apparent he was really only after his own truth that he'd already decided and was after this truth because the facts didn't line up with the truth he wanted. So he continued to tell everyone he was after the truth oblivious to the real truth sitting right in front of him.",
    "The box sat on the desk next to the computer. It had arrived earlier in the day and business had interrupted her opening it earlier. She didn't who had sent it and briefly wondered who it might have been. As she began to unwrap it, she had no idea that opening it would completely change her life.",
    "'It was so great to hear from you today and it was such weird timing,' he said. 'This is going to sound funny and a little strange, but you were in a dream I had just a couple of days ago. I'd love to get together and tell you about it if you're up for a cup of coffee,' he continued, laying the trap he'd been planning for years.",
    "How had she been so wrong? All her instincts and intuition completely failed her for the first time in her life. She had so heavily relied on both when making decisions up until this moment and she felt a seismic shift take place in her self-confidence. If she could be so completely wrong about something so simple as this, how could she make decisions about really important things taking place in her life? She wasn't sure what she should do next.",
    "It was the first day of the rest of her life. This wasn't the day she was actually born, but she knew that nothing would be the same from this day forward. Although this was a bit scary to her, it was also extremely freeing. Her past was no longer a burden or something that she needed to be concerned about and defend. She threw off the covers keeping her warm in bed, placed her feet over the side of the bed, slipped on her slipper, and took the first step of the first day of her new life.",
    "They had no proof. He knew that they knew he had done it but they didn't have any proof. It was a huge distinction and it was the difference between him keeping his freedom or being locked away for decades. They continued to question him, probing him for information that they could use against him or find the proof they needed to put him away. He smiled and continued to block their every inquiry by feigning his innocence for a crime they all knew he committed.",
    "The lone lamp post of the one-street town flickered, not quite dead but definitely on its way out. Suitcase by her side, she paid no heed to the light, the street or the town. A car was coming down the street and with her arm outstretched and thumb in the air, she had a plan.",
    "It had become a far too common an event in her life. She has specifically placed the key to the box in a special place so that she wouldn't lose it and know exactly where it was when the key was needed. Now that she needed to open the box, she had absolutely no idea where that special spot she placed the key might be.",
    "It was a scrape that he hardly noticed. Sure, there was a bit of blood but it was minor compared to most of the other cuts and bruises he acquired on his adventures. There was no way he could know that the rock that produced the cut had alien genetic material on it that was now racing through his bloodstream. He felt perfectly normal and continued his adventure with no knowledge of what was about to happen to him.",
    "There was a leak in the boat. Nobody had yet noticed it, and nobody would for the next couple of hours. This was a problem since the boat was heading out to sea and while the leak was quite small at the moment, it would be much larger when it was ultimately discovered. John had planned it exactly this way.",
    "Dave wasn't exactly sure how he had ended up in this predicament. He ran through all the events that had lead to this current situation and it still didn't make sense. He wanted to spend some time to try and make sense of it all, but he had higher priorities at the moment. The first was how to get out of his current situation of being naked in a tree with snow falling all around and no way for him to get down.",
    "At that moment he had a thought that he'd never imagine he'd consider. 'I could just cheat,' he thought, 'and that would solve the problem.' He tried to move on from the thought but it was persistent. It didn't want to go away and, if he was honest with himself, he didn't want it to.",
    "One dollar and eighty-seven cents. That was all. And sixty cents of it was in pennies. Pennies saved one and two at a time by bulldozing the grocer and the vegetable man and the butcher until one’s cheeks burned with the silent imputation of parsimony that such close dealing implied. One dollar and eighty-seven cents. And the next day would be Christmas...",
    "The time to take action was now. All three men knew in their hearts this was the case, yet none of them moved a muscle to try. They were all watching and waiting for one of the others to make the first move so they could follow a step or two behind and help. The situation demanded a leader and all three men were followers.",
    "Out of another, I get a lovely view of the bay and a little private wharf belonging to the estate. There is a beautiful shaded lane that runs down there from the house. I always fancy I see people walking in these numerous paths and arbors, but John has cautioned me not to give way to fancy in the least. He says that with my imaginative power and habit of story-making a nervous weakness like mine is sure to lead to all manner of excited fancies and that I ought to use my will and good sense to check the tendency. So I try.",
    "The towels had been hanging from the rod for years. They were stained and worn, and quite frankly, just plain ugly. Debra didn't want to touch them but she really didn't have a choice. It was important for her to see what was living within them.",
    "She had come to the conclusion that you could tell a lot about a person by their ears. The way they stuck out and the size of the earlobes could give you wonderful insights into the person. Of course, she couldn't scientifically prove any of this, but that didn't matter to her. Before anything else, she would size up the ears of the person she was talking to.",
    "There was something special about this little creature. Donna couldn't quite pinpoint what it was, but she knew with all her heart that it was true. It wasn't a matter of if she was going to try and save it, but a matter of how she was going to save it. She went back to the car to get a blanket and when she returned the creature was gone.",
    "The kids were loud. They were way too loud for Jerry, especially since this was a four-hour flight. The parents didn't seem to be able, or simply didn't want, to control them. They were yelling and fighting among themselves and it was impossible for any of the passengers to concentrate or rest. He thought about politely tapping on the parents' shoulders and asking them to try and get their kids under a bit more control, but before he did he came up with a better idea. Sure, it was a bit sinister, and he'd probably end p in a lot of trouble, but he really didn't care at that point.",
    "Debbie knew she was being selfish and unreasonable. She understood why the others in the room were angry and frustrated with her and the way she was acting. In her eyes, it didn't really matter how they felt because she simply didn't care."
]



const typingText=document.querySelector(".content p"),
inputField=document.querySelector(".box .input-field"),
mistakeTag=document.querySelector(".Mistakes span"),
timerTag=document.querySelector(".timeleft span"),
wpmTag=document.querySelector(".WPM span"),
cpmTag=document.querySelector(".CPM span"),
tryAgainTag=document.querySelector(".tryAgain button");
let timer,maxTime=60,timeleft=maxTime,wpm=cpm=charIndex=isTyping=mistakes=0;





function randomParagraph(){

    //getting random numbers and it is always less than the length of the paragraphs
    let randIndex= Math.floor(Math.random()*paragraphs.length);
    typingText.innerHTML="";//If the user pressed try again then the paragraph disappers
    paragraphs[randIndex].split("").forEach(span => {
        let spanTag = `<span>${span}</span>`;
        typingText.innerHTML+=spanTag;
    });

    document.addEventListener("keydown", () => inputField.focus());
    typingText.addEventListener("click", () => inputField.focus());

}


function initTyping(){
    const characters= typingText.querySelectorAll("span");
    let typedChar=inputField.value.split("")[charIndex];
    if (charIndex< characters.length-1&& timeleft>0){
        if(!isTyping){

            timer=setInterval(()=>{
                if(timeleft>0){
                    timeleft--;
                    timerTag.innerText=timeleft;
                }
                else
                    clearInterval(timer);
            },1000);
            isTyping=true;
        }
    
    
        if(typedChar==null){
            charIndex--;
            if( characters[charIndex].classList.contains("incorrect"))
            {
                mistakes--;
            }
            characters[charIndex].classList.remove("correct","incorrect");
        }
        else{
    
            if(typedChar===characters[charIndex].innerText){
                characters[charIndex].classList.add("correct");
    
            }
            else{
                // console.log("Incorrect");
                characters[charIndex].classList.add("incorrect");
                mistakes++;
                
                console.log(mistakes);
            }
            charIndex++;
        }
        characters.forEach(span=> span.classList.remove("active"));
        characters[charIndex].classList.add("active");
    
    
    
        let wpm=Math.round((((charIndex-mistakes)/5)/(maxTime-timeleft))*60);
        
        mistakeTag.innerHTML=mistakes;
        cpm=cpmTag.innerText=charIndex-mistakes;
        // wpm=Math.round(cpm/6);
        wpmTag.innerHTML=wpm;
        wpm=wpm<0||!wpm|| wpm=== Infinity? 0:wpm;
    }
    else {
        inputField.value="";
        clearInterval(timer);
    }
}

function resetGame(){
    randomParagraph();
    inputField.value="";
    clearInterval(timer);
    timeleft=maxTime;
    charIndex=mistakes=isTyping=0;
    timerTag.innerText=timeleft;
    mistakeTag.innerText=mistakes;
    wpmTag.innerText=0;
    cpmTag.innerText=0;

}


randomParagraph();
inputField.addEventListener("input",initTyping);
tryAgainTag.addEventListener("click",resetGame);
