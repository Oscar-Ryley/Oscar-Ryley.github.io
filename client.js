function generate(){
    document.getElementById("mainpage").innerHTML = ( 
        `<div class="jumbotron text-center" style="background-color: rgba(0, 0, 0, 0.025);"><h1>Historic Achievements of Computer Science</h1><h3>Key figures in the development of Computer Science throughout history </h3></div><div class="container"><div class="row"><div class="column c-text-left"><h1>Ada Lovelace</h1><h3>The First software engineering and Bernoulli numbers</h3><p>Ada Lovelace was the first Computer Programmer/ Software developer. She publish the first complex computer algorithm in 1843, which was developed for Charles Babbages Analytical Engine - a planned successor for his Difference Engine (Project Lovelace, 2023). Ada had written and published this computer program over a century before the BASIC interpreter was written, another example of a program being written for a computer that had only existed as a thought at the inception of its software (Two-Bit History, 2018). Unfortunately, as the Analytical engine was never built, her program was never actually run.<br>  &nbsp; &nbsp; &nbsp; The Bernoulli numbers are a sequence of rational numbers that show up in lots of different areas of Mathematics (Project Lovelace, 2023). One method of calculating the Bernoulli numbers is to do it recursively, a function could hypothetically take an integer n as input and output the numerator and denominator of the nth Bernoulli number. </p></div><div class="column c-img-right"><br><img src=".\images\His1-AdaLovelace.jpg" alt="Ada Lovelace" width="200"></div><br></div><div class="row"><div class="column c-text-left"><h1>Alan Turing</h1><h3>WW2 Codebreaking - The Enigma code and the Bombe</h3><p>During World War Two, the German military used a device called an Enigma machine which would encipher information to such a great extent that it was thought impossible for a human to complete the calculations necessary in order to solve it in reasonable time. The keys would also be changed every day and therefore the previous codebreaking work could not be used effectively the next days ahead etc. <br>  &nbsp; &nbsp; &nbsp; The Enigma machine was comprised of a typewriter interface, with a lampboard lighting up the enciphered letters, which encrypted using three wheels from a set of five, with the Naval Enigma machines choosing from an even bigger pool of eight wheels. The wheel settings where changed using key sheets that the German army would switch out and destroy frequently (National Museum of Computing, 2023). <br>  &nbsp; &nbsp; &nbsp; Alan Turing developed a machine called the Bombe that would discover the daily key being used by the German Enigma machines that day through a repeatable process Turing had developed in order to decipher the messages quicker. Turing would use cribs, repeated phrases that could be find through pattern recognition, such as the repeated phrase of -heil Hitler- in every message. This would mean that he would already know one section of plaintext amongst the enciphered message and could deduce the keys from there. He was also aided by the pseudo-random nature of the Enigma machine - it would never translate a letter to itself within the cipher (National Museum of Computing, 2023). <br>  &nbsp; &nbsp; &nbsp; The Turing-Welchman Bombe machine would mechanise this process and find out valid keys for the days messages. The Engineering of the original Bombe machines was done by the British Tabulating Machine Company (BTM). <br>  &nbsp; &nbsp; &nbsp; The Lecturer at Durham University and Technology Evangelist Professor Sue Black OBE led a campaign to save the historic site at which Alan Turing and the countless other codebreakers managed to complete the computation in order to break the Enigma code. The national museum of computing is at the same site and hold reconstructed versions of the Checking machine, Turing-Welchman Bombe machine and a working Enigma encoding machine. (National Museum of Computing, 2023) <br>  &nbsp; &nbsp; &nbsp; The Universal Turing Machine was a hypothetical mathematical model developed by Turing which has been used to develop computational models and modern computer architecture (New Scientist, 2023). This has led to Turing being dubbed the father of modern computer science. </p></div><div class="column c-img-right"><br><br><br><br><img src =".\images\His2-AlanTuring.webp" alt="Alan Turing" width="200"></div><br></div><div class="row"><div class="column c-text-left"><h1>Judith Love Cohen</h1><h3>The computation of NASA space travel</h3><p>Judith Love Cohen, Aerospace Engineer, designed the critical abort guidance system that made sure Apollo 13 astronauts came safely back to Earth (Fraga, 2023). She had studied engineering at USC and moved onto working for a NASA contractor called TRW, at a time when only 0.05% of all engineers were women. She was famously the mother of Jack Black, and even completed mathematical problems that went towards her Aerospace engineering work for NASA the day that he was born. Judith Love Cohen also had written books promoting STEM careers to girls and women in her retirement. I wanted to highlight her wonderful work towards the STEM field but also computation's work towards reaching new horizons through space as she was an important figure in NASA's computational history. <br>  &nbsp; &nbsp; &nbsp; The first space shuttles ran off as little as 4Kb of memory, with the computational power of most calculators nowadays being larger than that of those computers (NASA, 2023). NASA has been argued to have been responsible for rapid innovation in the computer science field, however, due to a necessity for safety in their practices, they would tend to use 'proven equipment and technologies'. </p></div><div class="column c-img-right"><br><img src=".\images\His3-JudithLoveCohen.webp" alt="Judith Love Cohen" width="200"></div><br></div><div class="row"><div class="column c-text-left"><h1>Tim Berners-Lee</h1><h3>The Birth of the Internet</h3><p>Tim Berners-Lee was a British Computer Scientist who created the World Wide Webb (WWW) in 1989, whilst working at CERN in Switzerland (CERN, 2023). It was originally created to help with information and data sharing between Scientists in universities and labs across countries. <a href="https://info.cern.ch/">info.cern.ch</a> was the first ever website and was dedicated to Berners-Lee's project itself. The first World Wide Web software was published to the public domain on 30th April 1993, a release was later made available with an open license.<br>  &nbsp; &nbsp; &nbsp;  Tim Berners-Lee promotes the open source nature of his web projects, him allowing other developers access to his web project made the internet what it is today. He continues to promote this free access to information in his role as CTO of Inrupt, who further develop the utility of the internet by creating a new level of standard at the web layer of the TCP/IP protocol stack. They develop an open source platform named Solid (W3, 2023). Sir Berners-Lee also founded the World Wide Web Consortium (W3C), in 1994. W3C is a web standards organisation that attempts to further the positive impact on humanity of the internet.</p></div><div class="column c-img-right"><br><br><img src=".\images\His4-TimBernersLee.jpg" alt="Tim Berners Lee" width="200"></div><br></div><hr><div class="row"><h1>Bibliography and Further Reading</h1><ul><li>Ada Lovelace's note G (2023), Ada Lovelace's Note G | Project Lovelace. Available at: <a href="https://projectlovelace.net/problems/ada-lovelaces-note-g ">https://projectlovelace.net/problems/ada-lovelaces-note-g</a></li><li>Two-Bit History (2018) What Did Ada Lovelace's Program Actually Do? Available at: <a href="https://twobithistory.org/2018/08/18/ada-lovelace-note-g.html">https://twobithistory.org/2018/08/18/ada-lovelace-note-g.html</a></li><li>The turing-welchman bombe (2023), The National Museum of Computing. Available at: <a href="https://www.tnmoc.org/bombe">https://www.tnmoc.org/bombe</a></li><li>Aron, J. (2023), Educational Access Digital Subscriptions: New scientist, Institutional access barrier | New Scientist. Available at: <a href = "https://institutions.newscientist.com/people/alan-turing/">https://institutions.newscientist.com/people/alan-turing/</a></li><li>Fraga, K. (2023), How Jack Black's mother helped save Apollo 13, All That's Interesting. Available at: <a href="https://allthatsinteresting.com/judith-love-cohen">https://allthatsinteresting.com/judith-love-cohen</a></li><li>NASA (2023), Computing and Spaceflight: An Introduction , Computers in Spaceflight: The NASA Experience. Available at: <a href = "https://history.nasa.gov/computers/Computing.html">https://history.nasa.gov/computers/Computing.html</a></li><li>NASA (2023), Chapter Four - Computers in the Space Shuttle Avionics System, Computers in Spaceflight: The NASA Experience. Available at: <a href = "https://history.nasa.gov/computers/Ch4-3.html">https://history.nasa.gov/computers/Ch4-3.html</a></li><li>CERN accelerating science (2023), The birth of the Web, CERN. Available at: <a href="https://home.cern/science/computing/birth-web">https://home.cern/science/computing/birth-web</a> </li><li>W3 (2023), Tim Berners-Lee Biography. Available at: <a href="https://www.w3.org/People/Berners-Lee/">https://www.w3.org/People/Berners-Lee/</a></li></ul></div></div>`
    );
}