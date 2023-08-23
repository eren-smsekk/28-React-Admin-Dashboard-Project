import { useEffect } from "react";

const DarkMode = () => {
    useEffect(() => {
        const darkButton = document.querySelector('#darkBtn');
        darkButton.addEventListener('click', () => { 
            const bodyElement = document.getElementById("body");
            const bigTitle = document.getElementById("bigTitle");
            const label = document.getElementById("label");
            const footer = document.getElementById("footer");
            if(!bodyElement.classList.contains("bg-dark")) {
                bodyElement.classList.add("bg-dark");
                bodyElement.classList.remove("bg-light");
                bigTitle.classList.remove("text-dark");
                bigTitle.classList.add("text-light");
                label.classList.remove("text-dark");
                label.classList.add("text-light");
                label.innerHTML = "Dark Mode";
                footer.classList.add("text-light");
                footer.classList.remove("text-dark");
            } else {
                bodyElement.classList.add("bg-light");
                bodyElement.classList.remove("bg-dark");
                bigTitle.classList.remove("text-light");
                bigTitle.classList.add("text-dark");
                label.classList.remove("text-light");
                label.classList.add("text-dark");
                label.innerHTML = "Light Mode";
                footer.classList.add("text-dark");
                footer.classList.remove("text-light");
            }
        });

        return () => {
            darkButton.removeEventListener('click', () => {});
        }
    }, []);
    

    return(
        <div>
            <div className="darkMod d-flex justify-content-center aling-items-center">
                <div className="form-check form-switch animate__animated animate__backInDown">
                    <input className="form-check-input" type="checkbox" role="switch" id="darkBtn" />
                    <label id="label" className="form-check-label text-white label ms-1" htmlFor="darkBtn">Light Mode</label>
                </div>
            </div>
        </div>
    );
}

export default DarkMode;