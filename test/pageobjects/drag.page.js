class DragPage {
    //Seletores
    get menuDrag() {
        return $("~Drag");
    }

    //drag
    get peca1() { 
        return $('~drag-l1'); 
    }
    get peca2() { 
        return $('~drag-c1'); 
    }
    get peca3() { 
        return $('~drag-r1'); 
    }
    get peca4() { 
        return $('~drag-l2'); 
    }
    get peca5() { 
        return $('~drag-c2'); 
    }
    get peca6() { 
        return $('~drag-r2'); 
    }
    get peca7() { 
        return $('~drag-l3'); 
    }
    get peca8() { 
        return $('~drag-c3'); 
    }
    get peca9() { 
        return $('~drag-r3'); 
    }
    
    //drop
    get encaixe1() { 
        return $('~drop-l1'); 
    }
    get encaixe2() { 
        return $('~drop-c1'); 
    }
    get encaixe3() { 
        return $('~drop-r1'); 
    }
    get encaixe4() { 
        return $('~drop-l2'); 
    }
    get encaixe5() { 
        return $('~drop-c2'); 
    }
    get encaixe6() { 
        return $('~drop-r2'); 
    }
    get encaixe7() { 
        return $('~drop-l3'); 
    }
    get encaixe8() { 
        return $('~drop-c3'); 
    }
    get encaixe9() { 
        return $('~drop-r3'); 
    }
    get mensagemSucesso() { 
        return $("android=new UiSelector().text(\"Congratulations\")"); 
    }

    // Métodos
    async abrirMenuDrag() {
        await this.menuDrag.click();
    }
    async arrastarPeca1() {
        await this.peca1.dragAndDrop(this.encaixe1);
    }
    async arrastarPeca2() {
        await this.peca2.dragAndDrop(this.encaixe2);
    }
    async arrastarPeca3() {
        await this.peca3.dragAndDrop(this.encaixe3);
    }
    async arrastarPeca4() {
        await this.peca4.dragAndDrop(this.encaixe4);
    }
    async arrastarPeca5() {
        await this.peca5.dragAndDrop(this.encaixe5);
    }
    async arrastarPeca6() {
        await this.peca6.dragAndDrop(this.encaixe6);
    }
    async arrastarPeca7() {
        await this.peca7.dragAndDrop(this.encaixe7);
    }
    async arrastarPeca8() {
        await this.peca8.dragAndDrop(this.encaixe8);
    }
    async arrastarPeca9() {
        await this.peca9.dragAndDrop(this.encaixe9);
    }
}
export default new DragPage();