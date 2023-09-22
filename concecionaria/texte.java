
package com.example.myapplication;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
//button.
        Button btn=(Button) findViewById(R.id.cadastrarText);
        Button btn2=(Button) findViewById(R.id.cadastrarText);
        //.

//TextView.
        TextView textView2=(TextView)findViewById(R.id.textView2);
        TextView textView3=(TextView)findViewById(R.id.textView3);
        TextView textView4=(TextView)findViewById(R.id.textView4);
        TextView textView5=(TextView)findViewById(R.id.textView5);
        //.
//editText.
        EditText nomeText=(EditText)findViewById(R.id.nomeText);
        EditText Sobrenometext=(EditText)findViewById(R.id.Sobrenometext);
        EditText endereçoText=(EditText)findViewById(R.id.endereçoText);
        EditText Telefonetext=(EditText)findViewById(R.id.Telefonetext);
//.


        btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                textView2.setText(nomeText.getText());
                textView3.setText(Sobrenometext.getText());
                textView4.setText(endereçoText.getText());
                textView5.setText(Telefonetext.getText());




            }
        });

}}