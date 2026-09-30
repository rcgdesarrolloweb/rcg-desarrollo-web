/* =========================================================
   RCG DESARROLLO WEB
   MAIN JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       MENÚ MÓVIL
    ===================================================== */

    const menuButton = document.getElementById("menu-toggle");
    const nav = document.getElementById("nav");

    if (menuButton && nav) {

        menuButton.addEventListener("click", function () {

            const isOpen = nav.classList.toggle("active");

            menuButton.classList.toggle("active", isOpen);
            document.body.classList.toggle("menu-open", isOpen);

            menuButton.setAttribute(
                "aria-label",
                isOpen ? "Cerrar menú" : "Abrir menú"
            );

        });


        nav.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                nav.classList.remove("active");
                menuButton.classList.remove("active");
                document.body.classList.remove("menu-open");

                menuButton.setAttribute(
                    "aria-label",
                    "Abrir menú"
                );

            });

        });

    }


    /* =====================================================
       SERVICIOS
    ===================================================== */

    const serviceItems =
        document.querySelectorAll(".service-item");


    serviceItems.forEach(function (item) {

        const trigger =
            item.querySelector(".service-trigger");

        const toggle =
            item.querySelector(".service-toggle");


        if (!trigger || !toggle) {
            return;
        }


        trigger.addEventListener("click", function () {

            const alreadyActive =
                item.classList.contains("active");


            serviceItems.forEach(function (service) {

                service.classList.remove("active");

                const serviceToggle =
                    service.querySelector(".service-toggle");

                if (serviceToggle) {
                    serviceToggle.textContent = "+";
                }

            });


            if (!alreadyActive) {

                item.classList.add("active");
                toggle.textContent = "×";

            }

        });

    });


    /* =====================================================
       CÓMO TRABAJO
    ===================================================== */

    const processData = [

        {
            number: "01",
            label: "PRIMER PASO",
            title: "Hablemos de tu idea.",
            description:
                "Me cuentas qué necesitas, conozco tu negocio y analizamos juntos qué tipo de web puede ayudarte a conseguir tus objetivos.",
            symbol: "↗"
        },

        {
            number: "02",
            label: "SEGUNDO PASO",
            title: "Le damos forma.",
            description:
                "Definimos la estructura, el estilo y la experiencia de la web para que represente correctamente la identidad de tu negocio.",
            symbol: "+"
        },

        {
            number: "03",
            label: "TERCER PASO",
            title: "La convierto en realidad.",
            description:
                "Desarrollo la web, implemento las funcionalidades necesarias y adapto cada detalle para ordenador, tablet y móvil.",
            symbol: "</>"
        },

        {
            number: "04",
            label: "ÚLTIMO PASO",
            title: "Tu web, online.",
            description:
                "Revisamos el resultado, realizamos los últimos ajustes y publicamos tu nueva web para que pueda empezar a trabajar para tu negocio.",
            symbol: "✓"
        }

    ];


    const processTabs =
        document.querySelectorAll(".process-tab");

    const processNumber =
        document.getElementById("process-number");

    const processLabel =
        document.getElementById("process-label");

    const processTitle =
        document.getElementById("process-title");

    const processDescription =
        document.getElementById("process-description");

    const processSymbol =
        document.getElementById("process-symbol");

    const processDisplay =
        document.querySelector(".process-display");


    if (
        processTabs.length > 0 &&
        processNumber &&
        processLabel &&
        processTitle &&
        processDescription &&
        processSymbol &&
        processDisplay
    ) {

        processTabs.forEach(function (tab) {

            tab.addEventListener("click", function () {

                const step =
                    Number(tab.dataset.step);

                const data =
                    processData[step];


                if (!data) {
                    return;
                }


                processTabs.forEach(function (button) {
                    button.classList.remove("active");
                });


                tab.classList.add("active");


                processNumber.textContent =
                    data.number;

                processLabel.textContent =
                    data.label;

                processTitle.textContent =
                    data.title;

                processDescription.textContent =
                    data.description;

                processSymbol.textContent =
                    data.symbol;


                processDisplay.classList.remove(
                    "process-change"
                );

                void processDisplay.offsetWidth;

                processDisplay.classList.add(
                    "process-change"
                );

            });

        });

    }


    /* =====================================================
       PROJECT BRIEF
    ===================================================== */

    const briefForm =
        document.getElementById("brief-form");


    if (briefForm) {

        const steps =
            Array.from(
                briefForm.querySelectorAll(".brief-step")
            );

        const progressItems =
            Array.from(
                briefForm.querySelectorAll(
                    ".brief-progress-item"
                )
            );


        const backButton =
            document.getElementById("brief-back");

        const nextButton =
            document.getElementById("brief-next");

        const submitButton =
            document.getElementById("brief-submit");

        const currentNumber =
            document.getElementById("brief-current");

        const controls =
            document.getElementById("brief-controls");

        const success =
            document.getElementById("brief-success");


        /* =================================================
           ¿TIENE WEB?
        ================================================= */

        const websiteOptions =
            briefForm.querySelectorAll(
                'input[name="tiene_web"]'
            );

        const websiteField =
            document.getElementById("brief-web-url");

        const websiteInput =
            document.getElementById("web_actual");


        websiteOptions.forEach(function (option) {

            option.addEventListener(
                "change",
                function () {

                    if (!websiteField || !websiteInput) {
                        return;
                    }


                    if (option.value === "Sí") {

                        websiteField.classList.add(
                            "active"
                        );

                    } else {

                        websiteField.classList.remove(
                            "active"
                        );

                        websiteInput.value = "";

                    }

                }
            );

        });


        /* =================================================
           COMPROBAR ELEMENTOS DEL BRIEF
        ================================================= */

        if (
            steps.length > 0 &&
            progressItems.length > 0 &&
            backButton &&
            nextButton &&
            submitButton &&
            currentNumber &&
            controls &&
            success
        ) {

            let currentStep = 1;


            /* =================================================
               MOSTRAR PASO
            ================================================= */

            function showStep(stepNumber) {

                if (
                    stepNumber < 1 ||
                    stepNumber > steps.length
                ) {
                    return;
                }


                currentStep = stepNumber;


                steps.forEach(function (step) {

                    const number =
                        Number(step.dataset.step);

                    step.classList.toggle(
                        "active",
                        number === currentStep
                    );

                });


                progressItems.forEach(
                    function (item, index) {

                        const itemStep =
                            index + 1;


                        item.classList.toggle(
                            "active",
                            itemStep === currentStep
                        );


                        item.classList.toggle(
                            "completed",
                            itemStep < currentStep
                        );

                    }
                );


                currentNumber.textContent =
                    String(currentStep).padStart(
                        2,
                        "0"
                    );


                backButton.style.visibility =
                    currentStep === 1
                        ? "hidden"
                        : "visible";


                if (currentStep === steps.length) {

                    nextButton.style.display =
                        "none";

                    submitButton.style.display =
                        "inline-flex";

                } else {

                    nextButton.style.display =
                        "inline-flex";

                    submitButton.style.display =
                        "none";

                }

            }


            /* =================================================
               VALIDAR PASO
            ================================================= */

            function validateCurrentStep() {

                if (currentStep === 1) {

                    const selectedProject =
                        briefForm.querySelector(
                            'input[name="tipo_proyecto"]:checked'
                        );


                    if (!selectedProject) {

                        const options =
                            briefForm.querySelector(
                                ".brief-options"
                            );


                        if (options) {

                            options.classList.remove(
                                "brief-error"
                            );

                            void options.offsetWidth;

                            options.classList.add(
                                "brief-error"
                            );


                            setTimeout(
                                function () {

                                    options.classList.remove(
                                        "brief-error"
                                    );

                                },
                                500
                            );

                        }


                        return false;

                    }

                }


                return true;

            }


            /* =================================================
               SIGUIENTE
            ================================================= */

            nextButton.addEventListener(
                "click",
                function () {

                    if (!validateCurrentStep()) {
                        return;
                    }


                    if (currentStep < steps.length) {

                        showStep(
                            currentStep + 1
                        );

                    }

                }
            );


            /* =================================================
               ANTERIOR
            ================================================= */

            backButton.addEventListener(
                "click",
                function () {

                    if (currentStep > 1) {

                        showStep(
                            currentStep - 1
                        );

                    }

                }
            );


            /* =================================================
               PROGRESO SUPERIOR
            ================================================= */

            progressItems.forEach(
                function (item, index) {

                    item.addEventListener(
                        "click",
                        function () {

                            const targetStep =
                                index + 1;


                            if (
                                targetStep <= currentStep
                            ) {

                                showStep(
                                    targetStep
                                );

                            }

                        }
                    );

                }
            );


            /* =================================================
               OPCIONES PASO 1
            ================================================= */

            const projectOptions =
                briefForm.querySelectorAll(
                    '.brief-option input[type="radio"]'
                );


            projectOptions.forEach(
                function (option) {

                    option.addEventListener(
                        "change",
                        function () {

                            briefForm
                                .querySelectorAll(
                                    ".brief-option"
                                )
                                .forEach(
                                    function (label) {

                                        label.classList.remove(
                                            "selected"
                                        );

                                    }
                                );


                            const selectedLabel =
                                option.closest(
                                    ".brief-option"
                                );


                            if (selectedLabel) {

                                selectedLabel.classList.add(
                                    "selected"
                                );

                            }

                        }
                    );

                }
            );


            /* =================================================
               OBJETIVOS PASO 3
            ================================================= */

            const objectiveInputs =
                briefForm.querySelectorAll(
                    '.brief-objectives input[type="checkbox"]'
                );


            objectiveInputs.forEach(
                function (input) {

                    input.addEventListener(
                        "change",
                        function () {

                            const label =
                                input.closest("label");


                            if (label) {

                                label.classList.toggle(
                                    "selected",
                                    input.checked
                                );

                            }

                        }
                    );

                }
            );


            /* =================================================
               TELÉFONO
            ================================================= */

            const phone =
                document.getElementById("telefono");

            const phoneError =
                document.getElementById("telefono-error");


            /*
               Al empezar a escribir de nuevo,
               eliminamos el error visual.
            */

            if (phone && phoneError) {

                phone.addEventListener(
                    "input",
                    function () {

                        phone.classList.remove(
                            "input-error"
                        );

                        phoneError.classList.remove(
                            "active"
                        );

                    }
                );

            }


            /* =================================================
               ENVÍO DEL FORMULARIO
            ================================================= */

            briefForm.addEventListener(
                "submit",
                async function (event) {

                    event.preventDefault();


                    const name =
                        document.getElementById("nombre");

                    const email =
                        document.getElementById("email");

                    const privacy =
                        document.getElementById("privacidad");


                    /* =========================================
                    COMPROBAR ELEMENTOS
                    ========================================= */

                    if (
                        !name ||
                        !email ||
                        !privacy
                    ) {
                        return;
                    }


                    /* =========================================
                    CAMPOS OBLIGATORIOS
                    ========================================= */

                    if (
                        !name.value.trim() ||
                        !email.value.trim() ||
                        !privacy.checked
                    ) {

                        briefForm.reportValidity();

                        return;

                    }


                    /* =========================================
                    EMAIL
                    ========================================= */

                    if (!email.checkValidity()) {

                        email.reportValidity();

                        return;

                    }


                    /* =========================================
                    TELÉFONO
                    ========================================= */

                    if (phone && phoneError) {

                        const phoneValue =
                            phone.value.trim();


                        phone.classList.remove(
                            "input-error"
                        );

                        phoneError.classList.remove(
                            "active"
                        );


                        /*
                        El teléfono es opcional.
                        Si escribe algo, debe ser válido.
                        */

                        if (phoneValue !== "") {

                            const cleanPhone =
                                phoneValue.replace(
                                    /[\s-]/g,
                                    ""
                                );


                            const phoneRegex =
                                /^(\+34)?[6789]\d{8}$/;


                            if (
                                !phoneRegex.test(
                                    cleanPhone
                                )
                            ) {

                                phone.classList.add(
                                    "input-error"
                                );

                                phoneError.classList.add(
                                    "active"
                                );

                                phone.focus();

                                return;

                            }

                        }

                    }


                    /* =========================================
                    ENVIAR A WEB3FORMS
                    ========================================= */

                    const originalButtonContent =
                        submitButton.innerHTML;


                    try {

                        /*
                        Evitamos que el usuario pueda
                        pulsar varias veces.
                        */

                        submitButton.disabled = true;

                        submitButton.innerHTML =
                            "Enviando...";


                        /*
                        Recogemos automáticamente todos
                        los campos del formulario.
                        */

                        const formData =
                            new FormData(briefForm);


                        /*
                        Enviamos los datos a Web3Forms.
                        */

                        const response =
                            await fetch(
                                "https://api.web3forms.com/submit",
                                {
                                    method: "POST",
                                    body: formData
                                }
                            );


                        const data =
                            await response.json();


                        /* =====================================
                        WEB3FORMS CONFIRMA EL ENVÍO
                        ===================================== */

                        if (response.ok && data.success) {

                            /*
                            Solo AHORA mostramos
                            la pantalla de gracias.
                            */

                            steps.forEach(
                                function (step) {

                                    step.classList.remove(
                                        "active"
                                    );

                                }
                            );


                            success.classList.add(
                                "active"
                            );


                            controls.style.display =
                                "none";


                            progressItems.forEach(
                                function (item) {

                                    item.classList.add(
                                        "completed"
                                    );

                                    item.classList.remove(
                                        "active"
                                    );

                                }
                            );


                            /*
                            Limpiamos los datos después
                            de confirmar el envío.
                            */

                            briefForm.reset();


                            return;

                        }


                        /* =====================================
                        WEB3FORMS DEVUELVE ERROR
                        ===================================== */

                        throw new Error(
                            data.message ||
                            "No se pudo enviar el formulario."
                        );


                    } catch (error) {

                        console.error(
                            "Error enviando formulario:",
                            error
                        );


                        alert(
                            "No se ha podido enviar tu solicitud. " +
                            "Inténtalo de nuevo o contacta conmigo " +
                            "por WhatsApp o email."
                        );


                        /*
                        Como ha fallado:
                        NO mostramos Gracias.
                        */

                        submitButton.disabled = false;

                        submitButton.innerHTML =
                            originalButtonContent;

                    }

                }
            );

            /* =================================================
               ESTADO INICIAL
            ================================================= */

            showStep(1);

        }

    }

    /* =====================================================
    SOBRE MI - MENÚ DE CONTACTO
    ===================================================== */

    const aboutContactToggle =
        document.getElementById("about-contact-toggle");

    const aboutContactMenu =
        document.getElementById("about-contact-menu");


    if (aboutContactToggle && aboutContactMenu) {

        aboutContactToggle.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                aboutContactMenu.classList.toggle(
                    "active"
                );

            }
        );


        /* Cerrar al pulsar fuera */

        document.addEventListener(
            "click",
            function (event) {

                if (
                    !aboutContactMenu.contains(event.target) &&
                    !aboutContactToggle.contains(event.target)
                ) {

                    aboutContactMenu.classList.remove(
                        "active"
                    );

                }

            }
        );

    }


});