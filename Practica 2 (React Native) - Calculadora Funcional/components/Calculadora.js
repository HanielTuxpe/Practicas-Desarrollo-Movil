import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from './Estilos';

export const Calculadora = () => {
    const [num, setnum] = useState('0');
    const [prevValue, setPrevValue] = useState('');

    const addText = (value) => {
        if (value === '+' || value === '-' || value === '*' || value === '/') {
            if (prevValue !== '') {
                calResult();
            }
            setPrevValue(num + value);
            setnum('0');
        } else if (value === '+/-') {
            setnum((prevValue) => {
                if (prevValue === '0') {
                    return '0';
                }
                if (prevValue.startsWith('-')) {
                    return prevValue.substring(1);
                } else {
                    return '-' + prevValue;
                }
            });
        } else if (value === '%') {
            const numAct = parseFloat(num);
            const result = numAct / 100;
            setnum(result.toString());
        } else if (value === '√') {
            const numAct = parseFloat(num);
            if (numAct >= 0) {
                const result = Math.sqrt(numAct);
                setnum(result.toString());
            } else {
                setnum('Error');
            }
        } else if (value === 'x²') {
            const numAct = parseFloat(num);
            const result = numAct * numAct;
            setnum(result.toString());
        } else if (value === '1/x') {
            const numAct = parseFloat(num);
            if (numAct !== 0) {
                const result = 1 / numAct;
                setnum(result.toString());
            } else {
                setnum('Error');
            }
        } else {
            setnum((prevValue) => {
                if (num === '0') {
                    return value;
                }
                if (/[*/+-]$/.test(prevValue) || (value === '.' && /\.$/.test(prevValue))) {
                    return prevValue;
                }
                if (value === '.' && /\d*\.\d*$/.test(prevValue)) {
                    return prevValue;
                }
                if (value === '.' && /^[*/+-]$/.test(prevValue)) {
                    return prevValue + '0' + value;
                }
                if ((value === '+' || value === '-') && !/^[*/+-.]$/.test(prevValue)) {
                    return value + prevValue;
                }
                return prevValue + value;
            });
        }
    };

    const calResult = () => {
        try {
            const result = eval(prevValue + num);
            setnum(result.toString());
            setPrevValue('');
        } catch (error) {
            setnum('Error');
        }
    };

    const clearText = () => {
        setnum('0');
        setPrevValue('');
    };

    const remNum = () => {
        setnum((prevValue) => {
            return prevValue.slice(0, -1);
        });
    };

    return (
        <View style={styles.container2}>
            <View style={styles.containerB}>
                <View style={styles.result}>
                    <Text style={styles.resultText}>{num}</Text>
                </View>
                <View style={styles.buttons}>
                    <Pressable style={styles.button} onPress={() => addText("%")}><Text style={styles.buttonText}>%</Text></Pressable>
                    <Pressable style={styles.button} onPress={() => clearText()}><Text style={styles.buttonText}>CE</Text></Pressable>
                    <Pressable style={styles.button} onPress={() => clearText()}><Text style={styles.buttonText}>C</Text></Pressable>
                    <Pressable style={styles.button} onPress={() => remNum()}><Text style={styles.buttonText}>⌫</Text></Pressable>
                    <Pressable style={styles.button} onPress={() => addText("1/x")}><Text style={styles.buttonText}>1/x</Text></Pressable>
                    <Pressable style={styles.button} onPress={() => addText("√")}><Text style={styles.buttonText}>√</Text></Pressable>
                    <Pressable style={styles.button} onPress={() => addText("x²")}><Text style={styles.buttonText}>x²</Text></Pressable>
                    <Pressable style={styles.button} onPress={() => addText("/")}><Text style={styles.buttonText}>/</Text></Pressable>
                    <Pressable style={styles.button} onPress={() => addText("7")}><Text style={styles.buttonText}>7</Text></Pressable>
                    <Pressable style={styles.button} onPress={() => addText("8")}><Text style={styles.buttonText}>8</Text></Pressable>
                    <Pressable style={styles.button} onPress={() => addText("9")}><Text style={styles.buttonText}>9</Text></Pressable>
                    <Pressable style={styles.button} onPress={() => addText("*")}><Text style={styles.buttonText}>*</Text></Pressable>
                    <Pressable style={styles.button} onPress={() => addText("4")}><Text style={styles.buttonText}>4</Text></Pressable>
                    <Pressable style={styles.button} onPress={() => addText("5")}><Text style={styles.buttonText}>5</Text></Pressable>
                    <Pressable style={styles.button} onPress={() => addText("6")}><Text style={styles.buttonText}>6</Text></Pressable>
                    <Pressable style={styles.button} onPress={() => addText("-")}><Text style={styles.buttonText}>-</Text></Pressable>
                    <Pressable style={styles.button} onPress={() => addText("1")}><Text style={styles.buttonText}>1</Text></Pressable>
                    <Pressable style={styles.button} onPress={() => addText("2")}><Text style={styles.buttonText}>2</Text></Pressable>
                    <Pressable style={styles.button} onPress={() => addText("3")}><Text style={styles.buttonText}>3</Text></Pressable>
                    <Pressable style={styles.button} onPress={() => addText("+")}><Text style={styles.buttonText}>+</Text></Pressable>
                    <Pressable style={styles.button} onPress={() => addText("+/-")}><Text style={styles.buttonText}>+/-</Text></Pressable>
                    <Pressable style={styles.button} onPress={() => addText("0")}><Text style={styles.buttonText}>0</Text></Pressable>
                    <Pressable style={styles.button} onPress={() => addText(".")}><Text style={styles.buttonText}>.</Text></Pressable>
                    <Pressable style={[styles.button, styles.equalButton]} onPress={() => calResult()}><Text style={styles.buttonText}>=</Text></Pressable>

                </View>
            </View>
        </View>
    );
};

export default Calculadora;
