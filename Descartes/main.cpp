#include <iostream>
#include <windows.h>
#include <conio.h>

int main(void)
{
    // Aqui va la magia de dibujar la foto
    const float scale = 1;
    for (int y = 0; y < 575 * scale; y++)
    {
        for (int x = 0; x < 1050 * scale; x++)
        {
            SetCursorPos(x + 445 + 1050 / 2 - 1050 * scale, y + 258 + 575 / 2 - 575 * scale);
            mouse_event(MOUSEEVENTF_LEFTDOWN | MOUSEEVENTF_LEFTUP, 0, 0, 0, 0);
        }
    }
}

struct coord
{
    int x;
    int y;
};

// Le pasas los colores, y hago magia para que me de el color que mas se parezca de la lista de colores
coord color2coord(int r, int g, int b)
{
    // Darle un try a magick++ para el tema del color
    coord a;
    return a;
}