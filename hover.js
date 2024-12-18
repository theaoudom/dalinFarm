function toggleAnswer(target, answers, icons) {
    const targetAnswer = document.querySelector(target.answerId);
    const targetIcon = document.querySelector(target.iconClass);
    const iconsRotate = document.querySelector(".organicfood .right .qa1 i");
    // Check the current state
    const isVisible = targetAnswer.style.display === "block";
  
    // Hide all answers and reset all icons
    answers.forEach((answer) => {
      answer.style.display = "none";
      answer.style.height = "0";
    });
    icons.forEach((icon) => (icon.style.background = "white"));
  
    // If the target was visible, no need to re-open
    if (!isVisible) {
        targetAnswer.style.display = "block";
        targetAnswer.style.height = target.height;
        targetIcon.style.background = "#e9da5d";
    }
  }
  
  const answers = [
    document.querySelector("#answer"),
    document.querySelector("#answer2"),
    document.querySelector("#answer3"),
  ];
  
  const icons = [
    document.querySelector(".clkicon"),
    document.querySelector(".clkicon2"),
    document.querySelector(".clkicon3"),
  ];
  
  document.querySelector(".clk").addEventListener("click", () =>
    toggleAnswer(
      { answerId: "#answer", iconClass: ".clkicon", height: "100px" },
      answers,
      icons
    )
  );
  
  document.querySelector(".clk2").addEventListener("click", () =>
    toggleAnswer(
      { answerId: "#answer2", iconClass: ".clkicon2", height: "130px" },
      answers,
      icons
    )
  );
  
  document.querySelector(".clk3").addEventListener("click", () =>
    toggleAnswer(
      { answerId: "#answer3", iconClass: ".clkicon3", height: "150px" },
      answers,
      icons
    )
  );
  