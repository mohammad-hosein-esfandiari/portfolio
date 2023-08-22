{/* <div className="border-2">
<label htmlFor="">icon</label>
<input value={icon} onChange={(e)=>setIcon(e.target.value)} className="border-2" type="text" />
<div>
<label htmlFor="">title</label>
<input value={title} onChange={(e)=>setTitle(e.target.value)} className="border-2" type="text" />
</div>
<button className="border-2" onClick={addHandler}>add</button>

</div> */}
const addHandler = async () => {
    const obj = {
      icon,
      title,
    };
    const data = await getDocs(portfolioConnectionsRef);
    const latestData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    const skiiil = latestData.find((item) => item.id === "skills");
    const array = skiiil.skillsArray;
    try {
      const skill = doc(db, "portfolio", "skills");
      await updateDoc(skill, { skillsArray: [...array, obj] });
      setTitle("")
      setIcon("")
    } catch (error) {

    }
  };