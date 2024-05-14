// Memento class - stores the clipboard state
class ClipboardMemento {
  private content: string;

  constructor(content: string) {
    this.content = content;
  }

  getContent(): string {
    return this.content;
  }
}

// Originator class - manages clipboard content
class ClipboardManager {
  private clipboardContent: string = "";
  private history: ClipboardMemento[] = [];

  cut(text: string): void {
    this.clipboardContent = text;
    this.history.push(new ClipboardMemento(text));
  }

  copy(text: string): void {
    this.clipboardContent = text;
  }

  paste(): string {
    return this.clipboardContent;
  }

  undo(): void {
    const lastState = this.history.pop();
    if (lastState) {
      this.clipboardContent = lastState.getContent();
    }
  }
}

// Usage
const clipboard = new ClipboardManager();

clipboard.copy("Hello, World!");
console.log("Clipboard Content:", clipboard.paste());

clipboard.cut("Goodbye!");
console.log("Clipboard Content:", clipboard.paste());

clipboard.undo();
console.log("Clipboard Content (After Undo):", clipboard.paste());
